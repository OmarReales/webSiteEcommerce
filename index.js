const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {  
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

function numberToCurrency(n) {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'USD'
    }).format(n);
}

const getDolar = async () => {
    const res = await fetch('https://dolarapi.com/v1/dolares/blue');
    const data = await res.json();
    return data.venta;
};

function getJsonPath() {
    const pathname = window.location.pathname;
    console.log("Current Pathname: ", pathname);
    if (pathname.includes('index.html') || pathname === '/') {
        return 'products.json';
    } else if (pathname.includes('pages/')) {
        return '../products.json';
    }
    return 'products.json'; // Ruta por defecto
}

function getImagePath(img) {
    const pathname = window.location.pathname;
    if (pathname.includes('index.html') || pathname === '/') {
        return `${img}`; // La ruta ya está completa en el JSON
    } else if (pathname.includes('pages/')) {
        return `../${img}`; // Ruta relativa para páginas dentro de la carpeta 'pages'
    }
    return `${img}`; // Ruta por defecto
}

const loadProducts = async () => {
    try {
        const dolarValue = await getDolar();
        console.log("Dolar Value: ", dolarValue);
        const response = await fetch(getJsonPath());
        console.log("Fetching JSON from: ", getJsonPath());
        const data = await response.json();
        console.log("Product Data: ", data);
        
        const db = {
            items: data.items || [],
            methods: {
                find: (id) => {
                    return db.items.find(item => item.id == id);
                },
                remove: (items) => {
                    items.forEach(item => {
                        const product = db.methods.find(item.id);
                        if (product) {
                            product.qty = product.qty - item.qty;
                        }
                    });
                }
            }
        };
        
        // Renderizar la tienda
        const productContainer = document.querySelector('#product-container');
        function renderStore() {
            productContainer.innerHTML = '';
            db.items.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('pro', 'add');

                div.innerHTML = `
                    <img src="${getImagePath(item.img)}" alt="${item.name}">
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
                        <h4>${numberToCurrency(item.price * dolarValue)}</h4>
                    </div>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                `;
                productContainer.append(div);
                div.addEventListener('click', e => {
                    e.preventDefault();
                    localStorage.setItem("product", JSON.stringify(item));
                
                    // Obtener el pathname actual
                    const pathname = window.location.pathname;
                
                    // Construir la ruta base de acuerdo al pathname actual
                    let basePath = window.location.origin;
                
                    // Verificar si estamos en el directorio 'websiteEcommerce'
                    if (pathname.includes("/websiteEcommerce/")) {
                        basePath += "/websiteEcommerce/pages/sproduct.html";
                    } else {
                        basePath += "/pages/sproduct.html";
                    }
                
                    // Redireccionar a la página sproduct.html
                    window.location.href = basePath;
                });
                
            });
        }
        
        renderStore();
    } catch (error) {
        console.error('Error al cargar el JSON o el valor del dólar:', error);
    }
};

loadProducts();