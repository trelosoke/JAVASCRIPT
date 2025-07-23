'use strict';
//Ao invés de escrever as propriedades com nome: valor,
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

//prefira escrever assim:
function makeUser(name, age) {
  return {
    name, // o mesmo que name: name
    age,  // o mesmo que age: age
    // ...
  };
}

//Podemos usar até desse modo, dentro do próprio objeto
let user2 = {
  nome,  // same as name:name
  age: 30
};