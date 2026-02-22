'use strict';
//Crie um objeto com um método declarado diretamente como arrow function. Mostre que o 'this' não funciona como esperado.

let obj = {
    name: 'trelo',
    sayHi: () => {
        console.log("Olá, " + this.name + "!");
    },
};

obj.sayHi();
//Retorna 'undefined'. Arrow function não têm 'this'.