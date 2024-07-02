const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {  
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
const db = {
    items: [
        {
            id: 0,
            name: "Teclado K552",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 8000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 1,
            name: "Teclado K600",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 10000,
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 2,
            name: "Auricular 5.1",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 9000,
            qty: 8,
            tmark: "Redragon"
        },
        {
            id: 3,
            name: "Auricular 7.1",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 13000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 4,
            name: "Auriculares de oficina",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 5000,
            qty: 6,
            tmark: "Genius"
        },
        {
            id: 5,
            name: "Monitor 24\"",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 24000,
            qty: 4,
            tmark: "LG"
        },
        {
            id: 6,
            name: "Monitor 24\" 144Hz",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 32000,
            qty: 6,
            tmark: "LG"
        },
        {
            id: 7,
            name: "Monitor 27\" 144Hz",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 38000,
            qty: 4,
            tmark: "LG"
        },
        {
            id: 8,
            name: "Mouse M600",
            price: 8000,
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 9,
            name: "Mouse M552",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 7000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 10,
            name: "Mouse M701",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 14000,
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 11,
            name: "Joystick J7",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 8000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 12,
            name: "Placa de video RTX 3090",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 300000,
            qty: 6,
            tmark: "Nvidia"
        },
        {
            id: 13,
            name: "Placa de video GTX 1080",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 150000,
            qty: 4,
            tmark: "Nvidia"
        },
        {
            id: 14,
            name: "Webcam C600",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 15000,
            qty: 6,
            tmark: "Logitech"
        },
        {
            id: 15,
            name: "Parlante SP-HF180",
            img: "../img/products/f1.jpg",
            sImg:{
                img1: "../img/products/f1.jpg",
                img2: "../img/products/f4.jpg",
                img3: "../img/products/f5.jpg",
                img4: "../img/products/f6.jpg",
            },
            price: 15000,
            qty: 4,
            tmark: "Genius"
        },
    ]
}

const productContainer = document.querySelector('#product-container');
function renderStore() {
    const html = db.items.map((item) => {
        const div = document.createElement('div');
        div.classList.add('pro', 'add');
        
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" >
            <div class="des" data-id="${item.id}">
                <span>${item.tmark}</span>
                <h5>${item.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${item.price}</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        `;
        productContainer.append(div);
        div.addEventListener('click', e => {
            localStorage.setItem("product", JSON.stringify(item));
            window.location.href = 'sproduct.html';
        })
    });
}
renderStore();

