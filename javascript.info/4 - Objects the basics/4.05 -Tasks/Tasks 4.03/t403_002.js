'use strict';
//Crie dois objetos interligados (husband e wife) e depois remova as referências que os conectam. Mostre qual deles se torna inacessível.

let husband = {};
let wife = {};

husband.father = wife;
wife.mother = husband;

console.log(husband); //Exite
console.log(wife); //Existe

delete husband.father;

console.log(husband); //Existe
console.log(wife); //Existe

husband = null;

console.log(husband); //Não existe
console.log(wife); //Existe