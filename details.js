const productLocal = JSON.parse(localStorage.getItem("product"));
console.log(productLocal);

// const proDetails = document.querySelector("#prodetails");
// const quantity = document.querySelector("#quantity");
// const addCart = document.querySelector("#addcart");

function renderDetails() {
    const productLocal = JSON.parse(localStorage.getItem("product"));
    const proDetails = document.querySelector("#prodetails");
    // const quantity = document.querySelector("#quantity");
    // const addCart = document.querySelector("#addcart");
    
    proDetails.innerHTML = `
    <div class="single-pro-image">
        <img src="${productLocal.img}" width="100%" id="mainimg" alt="">
        <div class="small-img-group">
            <div class="small-img-col">
                <img src="${productLocal.sImg.img1}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.sImg.img2}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.sImg.img3}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.sImg.img4}" width="100%" class="small-img" alt="">
            </div>
        </div>
    </div>
    <div class="single-pro-details">
        <h6>${productLocal.tmark}</h6>
        <h4>${productLocal.name}</h4>
        <h2>$${productLocal.price}</h2>
        <span>Stock: ${productLocal.qty}</span>
        <select>
            <option>Color</option>
            <option>Blanco</option>
            <option>Negro</option>
            <option>Gris</option>
        </select>
        <input class= "quantity" id="quantity" type="number" data-id ="${productLocal.id}" value="1">
        <button class="normal addcart" data-id="${productLocal.id}">Añadir al carrito</button>
        <h4>Caracteristicas</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus alias voluptate quibusdam, excepturi ipsum deserunt corrupti numquam suscipit in ullam ipsam necessitatibus quasi sint vel, ad quaerat similique dolorem.</span>
    </div>
    `;
    document.querySelectorAll(".addcart").forEach((button) => {
        button.addEventListener("click", (e) => {
            localStorage.setItem("shoppingCart", JSON.stringify(productLocal));
        });
    });
};
renderDetails();


let mainImg = document.getElementById("mainimg");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = smallImg[i].src;
    };
}

function addToShoppingCart() {
    let quantity = document.getElementById("quantity").value;
    let addCart = document.getElementById("addcart");
    addCart.innerHTML = "Añadir al carrito";
}
