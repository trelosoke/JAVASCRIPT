'use strict';
//Crie uma função construtora 'User' que receba 'name' e 'age'. Instancie três usuários diferentes.

function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User("Gustavo", 19);
let user2 = new User("Gabriel", 23);
let user3 = new User("Agatha", 27);

console.log(user1);
console.log(user2);
console.log(user3);