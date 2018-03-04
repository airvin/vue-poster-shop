var PRICE = 9.99;

new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            { id: 1, title: 'Item 1', price: PRICE },
            { id: 2, title: 'Item 2', price: PRICE },
            { id: 3, title: 'Item 3', price: PRICE }
        ],
        cart: []
    },
    methods: {
        addItem: function(index) {
            var found = false;
            var item = this.items[index];
            this.total += item.price;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                } 
            }
            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    qty: 1
                });
            }
        }
    }
});
