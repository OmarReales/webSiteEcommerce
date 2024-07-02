const cartTable = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function renderShoppingCart() {
    const cartTable = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const cart = document.querySelector("#cart");
    let cartHTML = `
        <table width="100%">
            <thead>
                <tr>
                    <td>Quitar</td>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
    `;

    cartTable.forEach(item => {
        cartHTML += `
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="${item.img}" alt=""></td>
                    <td>${item.name}</td>
                    <td>$ ${item.price}</td>
                    <td><input type="number" value="${item.qty}"></td>
                    <td>$ ${item.price * item.qty}</td>
                </tr>
        `;
    });

    cartHTML += `
            </tbody>
        </table>
    `;

    cart.innerHTML = cartHTML;
}

renderShoppingCart();