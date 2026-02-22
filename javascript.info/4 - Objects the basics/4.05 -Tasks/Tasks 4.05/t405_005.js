'use strict';
//Crie um objeto usando new function() {…} para encapsular lógica de inicialização única.

let User = new function() {
    this.name = "Matheus";
    this.age = 19;
}; //É uma função construtora, mas não pode ser chamada novamente para criar outros, apenas esse.

console.log(User);

//tenta criar outro usuário
let user2 = new User(); //considera que não é construtora