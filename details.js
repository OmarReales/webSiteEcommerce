const productLocal = JSON.parse(localStorage.getItem("product"));
console.log(productLocal);

// const proDetails = document.querySelector("#prodetails");
// const quantity = document.querySelector("#quantity");
// const addCart = document.querySelector("#addcart");


function renderDetails() {
    const productLocal = JSON.parse(localStorage.getItem("product"));
    const proDetails = document.querySelector("#prodetails");
    const quantity = document.querySelector("#quantity");
    const addCart = document.querySelector("#addcart");
    let mainImg = document.querySelector("#mainImg");
    let smallImg = document.querySelector(".small-img");

    proDetails.innerHTML = `
    <div class="single-pro-image">
        <img src="${productLocal.img}" width="100%" id="mainImg" alt="">
        <div class="small-img-group">
            <div class="small-img-col">
                <img src="${productLocal.img}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.img}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.img}" width="100%" class="small-img" alt="">
            </div>
            <div class="small-img-col">
                <img src="${productLocal.img}" width="100%" class="small-img" alt="">
            </div>
        </div>
    </div>
    <div class="single-pro-details">
        <h6>Redragon</h6>
        <h4>${productLocal.name}</h4>
        <h2>$${productLocal.price}</h2>
        <select>
            <option>Color</option>
            <option>Blanco</option>
            <option>Negro</option>
            <option>Gris</option>
        </select>
        <input type="number" id ="quantity" value="1">
        <button class="normal" id="addcart">Añadir al carrito</button>
        <h4>Caracteristicas</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus alias voluptate quibusdam, excepturi ipsum deserunt corrupti numquam suscipit in ullam ipsam necessitatibus quasi sint vel, ad quaerat similique dolorem.</span>
    </div>
    `
    // smallImg[0].onclick = function () {
    //     mainImg.src = smallImg[0].src;
    // }
    // smallImg[1].onclick = function () {
    //     mainImg.src = smallImg[1].src;
    // }
    // smallImg[2].onclick = function () {
    //     mainImg.src = smallImg[2].src;
    // }
    // smallImg[3].onclick = function () {
    //     mainImg.src = smallImg[3].src;
    // }
};
renderDetails();
