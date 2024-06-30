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
    methods: {
        find: (id) => {
            return db.items.find(product => item.id === id)
        },
        remove: (items) => {
            items.forEach(item => {
                const product = db.methods.find(item.id);
                product.qty = product.qty - item.qty;
            });
            console.log(db);
        },
    },
    items: [
        {
            id: 0,
            name: "Teclado K552",
            img: "../img/products/f1.jpg",
            price: 8000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 1,
            name: "Teclado K600",
            img: "../img/products/f1.jpg",
            price: 10000,
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 2,
            name: "Auricular 5.1",
            img: "../img/products/f1.jpg",
            price: 9000,
            qty: 8,
            tmark: "Redragon"
        },
        {
            id: 3,
            name: "Auricular 7.1",
            img: "../img/products/f1.jpg",
            price: 13000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 4,
            name: "Auriculares de oficina",
            img: "../img/products/f1.jpg",
            price: 5000,
            qty: 6,
            tmark: "Genius"
        },
        {
            id: 5,
            name: "Monitor 24\"",
            img: "../img/products/f1.jpg",
            price: 24000,
            qty: 4,
            tmark: "LG"
        },
        {
            id: 6,
            name: "Monitor 24\" 144Hz",
            img: "../img/products/f1.jpg",
            price: 32000,
            qty: 6,
            tmark: "LG"
        },
        {
            id: 7,
            name: "Monitor 27\" 144Hz",
            img: "../img/products/f1.jpg",
            price: 38000,
            qty: 4,
            tmark: "LG"
        },
        {
            id: 8,
            name: "Mouse M600",
            price: 8000,
            img: "../img/products/f1.jpg",
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 9,
            name: "Mouse M552",
            img: "../img/products/f1.jpg",
            price: 7000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 10,
            name: "Mouse M701",
            img: "../img/products/f1.jpg",
            price: 14000,
            qty: 6,
            tmark: "Redragon"
        },
        {
            id: 11,
            name: "Joystick J7",
            img: "../img/products/f1.jpg",
            price: 8000,
            qty: 4,
            tmark: "Redragon"
        },
        {
            id: 12,
            name: "Placa de video RTX 3090",
            img: "../img/products/f1.jpg",
            price: 300000,
            qty: 6,
            tmark: "Nvidia"
        },
        {
            id: 13,
            name: "Placa de video GTX 1080",
            img: "../img/products/f1.jpg",
            price: 150000,
            qty: 4,
            tmark: "Nvidia"
        },
        {
            id: 14,
            name: "Webcam C600",
            img: "../img/products/f1.jpg",
            price: 15000,
            qty: 6,
            tmark: "Logitech"
        },
        {
            id: 15,
            name: "Parlante SP-HF180",
            img: "../img/products/f1.jpg",
            price: 15000,
            qty: 4,
            tmark: "Genius"
        },
        {
            id: 16,
            name: "Parlante SP-HF200",
            img: "../img/products/f1.jpg",
            price: 18000,
            qty: 6,
            tmark: "Genius"
        }
    ]
}
const shoppingCart = {
    items: JSON.parse(localStorage.getItem('shoppingCart')) || [],
    methods: {
        add:()=>{},
        remove:()=>{},
        count:()=>{},
        get:()=>{},
        getTotal:()=>{},
        hasInventory:()=>{},
        purchase:()=>{},
    },
}
const saveLocal = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart.items));
}

function renderStore() {
    const html = db.items.map((item) => {
        return ``;
    });
}

