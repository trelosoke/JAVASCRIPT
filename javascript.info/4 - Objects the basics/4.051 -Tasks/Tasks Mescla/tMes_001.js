'use strict';
//Crie uma função construtora 'Product' que gera objetos com propriedades (name, price) e métodos (discount). Depois, clone um objeto gerado com 'structuredClone' e mostre que alterações não afetam o original.

let discount = 15/100; 

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.discount = function() {
        return this.price * (1 - discount);
    }
}

let arroz = new Product("Arroz", 7);
console.log(arroz.discount());

let arrozCacarola = structuredClone(arroz);

console.log(arroz);
console.log(arrozCacarola);