'use strict';
//Crie um objeto 'user' e remova uma propriedade com o operador delete. Depois, verifique se ela ainda existe usando o operador in.
let user = {
    name: 'Doug',
    age: 22,
};

delete user.name;

console.log('name' in user);