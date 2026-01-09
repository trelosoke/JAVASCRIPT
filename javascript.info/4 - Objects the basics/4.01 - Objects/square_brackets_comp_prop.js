'use strict';
//Propriedades computadas (Computed properties)
let fruit = 'apples';

let bag = {
    [fruit]: 5
};

console.log(bag.apples);
//  A forma acima permite colocar o nome da propriedade de uma variável externa. 
//Na prática, o mesmo que isso:
let fruit2 = 'apples';
let bag2 = {};

bag2[fruit2] = 5;
//  Mas a primeira forma é mais legível, principalmente com expressões complexas

//Expressões complexas
let fruit3 = 'apple';

let bag3 = {
    [fruit3 + 'Computers']: 5
}

console.log(bag3.appleComputers);

//Moral: utilize dot notations quando nomes de propriedades são conhecidas e simples.