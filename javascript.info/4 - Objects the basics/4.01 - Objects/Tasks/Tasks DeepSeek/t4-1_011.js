'use strict';
// Create an object 'product' with properties: name (string), price (number), isInStock (boolean)
// Add a method 'applyDiscount' that takes a percentage (number) and reduces the price accordingly
//Enter the 'if' condicional to especify that the percentage must be between 0 and 100
// Example: If price=100 and discount=10 → new price=90

let product = {
    name: 'Pepsi',
    price: 12.00,
    isInStock: true,
    percent: 0,

    applyDiscount(percentage){
        this.percent = percentage;
        this.price *= (1 - percentage / 100);
    },

    displayDiscount(){
        return console.log(`Valor final: ${this.price} reais com ${this.percent}% de desconto!`);
    }
}

product.applyDiscount(12);
product.displayDiscount()