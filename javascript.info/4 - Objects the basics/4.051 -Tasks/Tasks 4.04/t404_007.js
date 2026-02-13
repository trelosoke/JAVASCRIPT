'use strict';
//Crie um objeto com um método que usa uma arrow function interna. Mostre que o 'this' da arrow vem do contexto externo.

let obj2 = {
    name: 'trelo',
    sayHi() {
        let arrSayHi = () => console.log("Olá, " + this.name + "!");
        return arrSayHi();
    },
};

obj2.sayHi();
//O arrow function não têm 'this', mas como ele estava dentro de uma declaration functiom (que têm 'this'), ele conseguiu usá-lo.