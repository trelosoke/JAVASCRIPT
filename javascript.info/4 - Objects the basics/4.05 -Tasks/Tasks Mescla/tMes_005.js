'use strict';
//Crie uma função construtora que adiciona métodos com arrow functions e teste como o this é herdado.

function User() {
    this.name = "Johnny";
    this.sayHi = () => {
        console.log(`Olá, ${this.name}!`);
    }
}

//Nesse caso, o 'this' da arrow function FUNCIONA, já que ele pega o 'this' de referência da função construtora.

let userJohnny = new User();
console.log(userJohnny);
userJohnny.sayHi();