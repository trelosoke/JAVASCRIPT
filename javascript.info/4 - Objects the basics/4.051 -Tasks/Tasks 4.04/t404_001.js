'use strict';
//Crie um objeto 'user' com um método 'sayHi' que usa 'this.name'. Teste copiando o objeto para outra variável e chamando o método.

let user = {
    name: 'trelo',
    sayHi() {
        console.log("Olá, " + this.name + "!");
    },
};

let admin = user;

user.sayHi();   
admin.sayHi();
//Mesmo resultado. Ao usar o this, não há erro de referenciar um outro objeto.