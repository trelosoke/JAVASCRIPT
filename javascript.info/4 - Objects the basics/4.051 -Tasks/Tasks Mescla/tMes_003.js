'use strict';
//Simule uma situação em que um objeto criado por construtor se torna inacessível (garbage collection) após remover todas as referências.

function User(name) {
    this.name = name;
}

let user = new User("Gustavo");
console.log(user.name);

user = a; //Objeto excluído
console.log(user.name);