'use strict';
//Crie um objeto 'car' com propriedades 'brand', 'year' e 'color'. Depois, adicione dinamicamente uma propriedade 'isElectric' e remova color.

let car = {
    brand: 'Chevrolet',
    year: 2006,
    color: 'blue',
};

car.isEletric = false;
delete car.color;

console.log(car);