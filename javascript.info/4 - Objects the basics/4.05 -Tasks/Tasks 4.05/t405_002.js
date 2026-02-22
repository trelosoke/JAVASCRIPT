'use strict';
//Adicione um método 'introduce' dentro da função construtora que imprime o nome do usuário.

function User(name) {
    this.name = name;

    this.introduce = function() {
        console.log("Seu nome é " + this.name + "!");
    }
};

let user = new User("Agatha");
console.log(user);

user.introduce();