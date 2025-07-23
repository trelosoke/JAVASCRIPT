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