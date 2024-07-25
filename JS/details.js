document.addEventListener("DOMContentLoaded", () => {
    renderBadge();
    renderDetails();
});
async function renderDetails() {
    const productLocal = JSON.parse(localStorage.getItem("product"));
    
    if (!productLocal) {
        console.error("No se encontró el producto en localStorage.");
        return;
    }

    const dolarValue = await getDolar();

    const proDetails = document.querySelector("#prodetails");

    proDetails.innerHTML = `
        <div class="single-pro-image">
            <img src="${getImagePath(productLocal.img)}" width="100%" id="mainimg" alt="">
            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="${getImagePath(productLocal.sImg.img1)}" width="100%" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img src="${getImagePath(productLocal.sImg.img2)}" width="100%" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img src="${getImagePath(productLocal.sImg.img3)}" width="100%" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img src="${getImagePath(productLocal.sImg.img4)}" width="100%" class="small-img" alt="">
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>${productLocal.tmark}</h6>
            <h4>${productLocal.name}</h4>
            <h2>$${productLocal.price * dolarValue}</h2>
            <span>Stock: ${productLocal.qty}</span>
            <select>
                <option>Color</option>
                <option>Blanco</option>
                <option>Negro</option>
                <option>Gris</option>
            </select>
            <input class="quantity" id="quantity" type="number" min="1" data-id="${productLocal.id}" value="1">
            <button class="normal addcart" id="${productLocal.id}">Añadir al carrito</button>
            <h4>Características</h4>
            <span>${productLocal.description}</span>
        </div>
    `;

    // Asignar eventos a las imágenes pequeñas para cambiar la imagen principal
    let mainImg = document.getElementById("mainimg");
    let smallImg = document.getElementsByClassName("small-img");

    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].onclick = function() {
            mainImg.src = smallImg[i].src;
        };
    }

    // Añadir productos al carrito
    addToCart();
}

function addToCart() {
    let addCartButtons = document.querySelectorAll(".addcart");

    addCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const buttonId = e.currentTarget.id;
            const quantityInput = document.querySelector(`#quantity[data-id="${buttonId}"]`);
            const quantity = parseInt(quantityInput.value);
            let productLocal = JSON.parse(localStorage.getItem("product"));

            if (!Array.isArray(shoppingCart)) {
                shoppingCart = [];
            }

            const productIndex = shoppingCart.findIndex(product => product.id == buttonId);
            const stock = productLocal.qty;

            let currentQtyInCart = 0;
            if (productIndex !== -1) {
                currentQtyInCart = shoppingCart[productIndex].qty;
            }

            if (quantity + currentQtyInCart > stock) {
                Swal.fire({
                    icon: 'error',
                    title: 'No hay suficiente stock',
                    text: 'La cantidad solicitada supera el stock disponible.',
                    footer: '<a href="../pages/shop.html">Seguir comprando</a>',
                    confirmButtonColor: "#088178"
                });
                return;
            }

            if (productIndex !== -1) {
                shoppingCart[productIndex].qty += quantity;
            } else {
                const newProduct = { ...productLocal, id: buttonId, qty: quantity };
                shoppingCart.push(newProduct);
                Toastify({
                    text: "Añadido al carrito",
                    className: "info",
                    style: {
                    background: "#088178",
                    color: "#fff",
                    fontFamily: "Sans-Serif",
                    }
                }).showToast();
            }

            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            renderBadge();
        });
    });
}

function renderBadge() {
    let badge = document.querySelector(".badge");
    let totalQuantity = shoppingCart.reduce((sum, product) => sum + product.qty, 0);

    if (totalQuantity > 0) {
        badge.style.display = "";
        badge.innerHTML = totalQuantity;
        
    } else {
        badge.style.display = "none";
    }
}

// Inicialización
const productLocal = JSON.parse(localStorage.getItem("product"));
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
