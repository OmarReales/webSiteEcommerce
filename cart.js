function renderShoppingCart() {
    const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || { items: [] };
    const items = shoppingCart;

    let total = 0;
    const tbody = document.querySelector(".table-body");

    tbody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><a href="#"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.img}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><input type="number" value="${item.qty}"></td>
            <td>${item.price * item.qty}</td>
        `;
        total += item.price * item.qty;
        tbody.append(tr);
    }
    const totalItems = document.querySelector(".subtotal");
    const delivery = document.querySelector(".delivery");
    const totalPrice = document.querySelector(".total");
    totalItems.innerHTML = numberToCurrency(total);
    delivery.innerHTML = numberToCurrency(200);
    totalPrice.innerHTML = numberToCurrency(total + 200);

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
                footer: '<a href="../pages/shop.html">Seguir comprando</a>'
            });
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No hay artículos en el carrito',
            text: 'Por favor, agregue artículos al carrito',
            footer: '<a href="../pages/shop.html">Seguir comprando</a>'
        });
    }
};

renderShoppingCart();

function numberToCurrency(n){
    return new Intl.NumberFormat('en-US',{
        maximumFractionDigits:2,
        style: 'currency',
        currency: 'USD'
    }).format(n);
}
