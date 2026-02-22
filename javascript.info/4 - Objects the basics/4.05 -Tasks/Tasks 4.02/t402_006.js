'use strict';
//Crie um objeto com 'const' e altere suas propriedades internas. Mostre que isso é permitido.

const obj = {
    nome: 'Felps',
};

obj.nome += ' legal';

console.log(obj); //As propriedades podem ser mudadas;

obj = null; //Isso não é possível, pois é um valor constante.