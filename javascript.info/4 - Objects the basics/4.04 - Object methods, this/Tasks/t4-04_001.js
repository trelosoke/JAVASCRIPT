'use strict';
// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why? 

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // What's the result? --- Undefined, pois o 'this' depende de como a função 'makeUser()' é chamada. Como o 'this' é avaliado antes do objeto existir, ele não está ligado a nenhum objeto. Nesse caso, a função foi chamada numa variável 'user', mas 'this' não funciona porque foi avaliado antes de user se quer existir. Logo, tentar acessar a propriedade 'this' nesse contexto é impossível.