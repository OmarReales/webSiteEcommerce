const renderShoppingCart = async () => {
    const dolarValue = await getDolar(); // Obtener el valor del dólar blue
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const items = shoppingCart;

    let total = 0;
    const tbody = document.querySelector(".table-body");

    tbody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemPriceInDollars = item.price * dolarValue; // Multiplicar el precio por el valor del dólar
        const tr = document.createElement("tr");

        // Ajustar la ruta de la imagen
        const imagePath = `../${item.img}`;

        // Debugging: Verifica la ruta de la imagen
        console.log('Imagen del producto:', imagePath);

        tr.innerHTML = `
            <td><a href="#" id="${item.id}" class="remove"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${imagePath}" alt="Imagen del producto ${item.name}"></td>
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
    totalItems.innerHTML = numberToCurrency(total);
    delivery.innerHTML = numberToCurrency(dolarValue); // costo entrega igual a un dolar
    totalPrice.innerHTML = numberToCurrency(total + dolarValue); // Sumar el costo de entrega al total

    const purchase = document.querySelector("#purchase");
    if (total !== 0) {
        purchase.addEventListener("click", () => {
            localStorage.removeItem("shoppingCart");
            renderShoppingCart();
            renderBadge();
            totalItems.innerHTML = numberToCurrency(0);
            delivery.innerHTML = numberToCurrency(0);
            totalPrice.innerHTML = numberToCurrency(0);
            Swal.fire({
                icon: "success",
                title: "Compra Exitosa!",
                text: "Muchas gracias por elegirnos!",
                footer: '<a href="../pages/shop.html">Seguir comprando</a>',
                confirmButtonColor: "#088178"
            });
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No hay artículos en el carrito',
            text: 'Por favor, agregue artículos al carrito',
            footer: '<a href="../pages/shop.html">Seguir comprando</a>',
            confirmButtonColor: "#088178"
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

renderShoppingCart();
