

const shoppingCart = {
    items: JSON.parse(localStorage.getItem("shoppingCart")) || [],
    methods: {
        add: (id, qty) => {
            const cartItem = shoppingCart.methods.get(id);

            if (cartItem) {
                if(shoppingCart.methods.hasInventory(id, qty + cartItem.qty)){
                    cartItem.qty += qty;
                }else{
                    alert("No hay suficientes items en stock")
                }
            }else{
                shoppingCart.items.push({id, qty});
            }
        },
        remove: (id, qty) => {
            const cartItem = shoppingCart.methods.get(id);

            cartItem.qty - qty > 0 ? cartItem.qty -= qty : shoppingCart.items = shoppingCart.items.filter(item => item.id !== id);
        },
        count: () => {
            return shoppingCart.items.reduce((acc, item)=> acc + item.qty, 0);
        },
        get: (id) => {
            const index = shoppingCart.items.findIndex(item => item.id === id);
            return index >= 0 ? shoppingCart.items[index] : null;
        },
        getTotal:() => {
            const total = shoppingCart.items.reduce((acc, item)=> {
                const found = db.methods.find(item.id);
                return (acc + found.price * item.qty);
            },0);
            return total;
        },
        hasInventory: (id, qty) => {
            return db.items.find(item => item.id === id).qty - qty >= 0;
        },
        purchase: () => {
            db.methods.remove(shoppingCart.items);
            shoppingCart.items = [];
        },
    }
}