'use strict';
//Clonando objetos
let user = {
    name: 'Diego',
    idade: 26
};

let userClone = {};

for(let prop in user){
    userClone[prop] = user[prop];
}

userClone.name = 'Douglas';

console.log(user);
console.log(userClone);


//Object.assign

let usuario = {
    name: 'John'
}

let perm1 = { canView: true };
let perm2 = { canEdit: true };

console.log(user);

Object.assign(user, perm1, perm2); //Assimila em user as propriedades de outros objetos

console.log(user); //Caso adicione uma propriedade existente, seu valor é sobescrito


//Clonando com Object.assign
let user2 = { name: 'Roberto' };

let user2Clone = Object.assign({}, user2);

console.log(user2Clone);