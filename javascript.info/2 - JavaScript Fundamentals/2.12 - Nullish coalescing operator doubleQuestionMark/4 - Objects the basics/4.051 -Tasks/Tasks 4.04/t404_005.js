'use strict';
//Crie um objeto com um método e depois atribua esse método a uma variável separada. Chame a variável e observe o valor de 'this'.

let user = {
    name: 'trelo',
    sayHi: function() {
        console.log("Olá, " + this.name + "!");
    },
};

let userSayHi = user.sayHi;

userSayHi();