'use strict';
//Crie um objeto com propriedades aninhadas e métodos. Faça um clone superficial com Object.assign e mostre os problemas ao alterar propriedades internas.

let student = {
    name: 'Borges',
    age: 23,
    adress: {
        street: 'Rua Gordon',
        city: 'Recife',
        estado: 'Pernambuco',
    },
    profile: {
        contact: {
            email: 'borges@xmail.co',
        }
    }
};

let studentClone = Object.assign({}, student);

console.log(studentClone.profile.contact.email);
studentClone.adress.street = 'Rua dos Bobos';

console.log(studentClone);
console.log(student); //Objetos internos mudam em ambos utilizando Object.assign.