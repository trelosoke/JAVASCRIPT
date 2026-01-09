'use strict';
//Tipos primitivos são lidos como valor inteiro.
let a = 10;
let b = a; //(*)

b += 2;

console.log(a); //Mesmo b pegando o mesmo valor de a, quando modificamos b, a não modifica. É criada automaticamente uma cópia de a em b.
console.log(b);

//Objetos são lidos por referência.
let objeto = {nome: 'Ronaldo'};
let objetoCopia = objeto; //(*)

objetoCopia.nome = 'Douglas';

console.log(objeto); //Não se trata de uma cópia em (*), mas sim um atalho, uma referência ao objeto principal. Por isso, quando modificada a "cópia", na verdade modifica o objeto original.
console.log(objetoCopia);
console.log(objeto == objetoCopia); //true, pois referenciam o mesmo objeto

//propriedades de const podem ser modificadas

const obj = {
    nome: 'Augusto',
    idade: 23
};

console.log(obj);
obj.idade = 25;

console.log(obj); //O importante é que const sempre referencia o mesmo objeto