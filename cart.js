const renderShoppingCart = async () => {
    const dolarValue = await getDolar(); // Obtener el valor del dólar blue
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const items = shoppingCart;

    let total = 0;
    const tbody = document.querySelector(".table-body");

    tbody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemPriceInDollars = item.price * dolarValue; // Multiplicar el precio por el valor del dólar
        const tr = document.createElement("tr");
        // Obtener la ruta de la imagen
        const imgSrc = item.img.includes("img/products/") ? item.img.replace("img/products/", "") : item.img;
        const imgPath = `../img/products/${imgSrc}`;

        console.log("Image Path:", imgPath); // Para verificar la ruta de la imagen en la consola
        
        tr.innerHTML = `
            <td><a href="#" id="${item.id}" class="remove"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${imgPath}" alt="Imagen del producto"></td>
            <td>${item.name}</td>
            <td>${numberToCurrency(itemPriceInDollars)}</td>
            <td><input type="number" min="1" value="${item.qty}" readonly="readonly"></td>
            <td>${numberToCurrency(itemPriceInDollars * item.qty)}</td>
        `;
        total += itemPriceInDollars * item.qty;
        tbody.append(tr);
    }

    const totalItems = document.querySelector(".subtotal");
    const delivery = document.querySelector(".delivery");
    const totalPrice = document.querySelector(".total");
    let deliveryCost = dolarValue * 3;
    totalItems.innerHTML = numberToCurrency(total);
    delivery.innerHTML = numberToCurrency(deliveryCost); // costo entrega igual a un dolar * 3
    totalPrice.innerHTML = numberToCurrency(total + deliveryCost); // Sumar el costo de entrega al total

    const couponButton = document.querySelector("#apply-coupon");
    couponButton.addEventListener("click", () => {
        applyCoupon(total, deliveryCost);
    });

    const purchase = document.querySelector("#purchase");
    if (total !== 0) {
        purchase.addEventListener("click", () => {
            localStorage.removeItem("shoppingCart");
            renderShoppingCart();
            totalItems.innerHTML = numberToCurrency(0);
            delivery.innerHTML = numberToCurrency(0);
            totalPrice.innerHTML = numberToCurrency(0);
            Swal.fire({
                icon: "success",
                title: "Compra Exitosa!",
                text: "Muchas gracias por elegirnos!",
                footer: '<a href="../pages/shop.html">Seguir comprando</a>',
                confirmButtonColor: "#088178"
            }).then(() => {
                window.location.reload(); // Recargar la página para actualizar el numero en el carrito
            })
            const couponInput = document.querySelector("#coupon-input");
            couponInput.value = "";
            renderBadge();
        });
    }

    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const buttonId = e.currentTarget.id;
            const index = shoppingCart.findIndex((product) => product.id == buttonId);
            shoppingCart.splice(index, 1);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            renderShoppingCart();
        });
    });
    renderBadge();
};

const applyCoupon = (total, deliveryCost) => {
    const couponInput = document.querySelector("#coupon-input");
    const couponCode = couponInput.value.trim().toUpperCase();
    const totalItems = document.querySelector(".subtotal");
    const delivery = document.querySelector(".delivery");
    const totalPrice = document.querySelector(".total");

    if (couponCode === "DESCUENTO50") {
        total = total * 0.5;
        Swal.fire({
            icon: "success",
            title: "Cupón aplicado!",
            text: "Se ha aplicado un 50% de descuento.",
            confirmButtonColor: "#088178"
        });
    } else if (couponCode === "ENVIOGRATIS") {
        deliveryCost = 0;
        Swal.fire({
            icon: "success",
            title: "Cupón aplicado!",
            text: "El envío es gratis.",
            confirmButtonColor: "#088178"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Cupón no válido",
            text: "El código de cupón ingresado no es válido.",
            confirmButtonColor: "#088178"
        });
    }

    totalItems.innerHTML = numberToCurrency(total);
    delivery.innerHTML = numberToCurrency(deliveryCost);
    totalPrice.innerHTML = numberToCurrency(total + deliveryCost);
};

renderShoppingCart();
