'use strict';
//O JS não entende isso:
//user.likes birds;    Caso fossemos usar nomes de propriedades com mais de uma palavra.

    //Caso queiremos chamar esse tipo de nome, usaremos os colchetes []
let user = {};

    //Define, atribui valor
user['like birds'] = true;

    //Obtém, retoma o valor
console.log(user['like birds']);

delete user['like birds'];

//Nome de propriedade como resultado de qualquer expressão
let key = 'like birds';

    //O mesmmo que user['like birds'] = true;
user[key] = true;

    //Case queiramos utilizar o input de algum usuário
let user2 = {
    nome: 'João',
    age: 30,
};

let key2 = prompt('O que queres saber sobre o usuário?', 'name')

console.log( user2[key2] ); //João, caso inserido 'name'.

//A notação de ponto (dot notation [.]) não pode ser usada nesses casos
let key3 = 'name';
console.log(user.key3); //undefined