'use strict';
//Peça dois números com prompt e mostre a soma. Depois, compare com a soma sem conversão (string + string).

let num1 = prompt("Número 1:");
let num2 = prompt("Número 2:");

let soma = +num1 + +num2;
let somaString = num1 + num2;

alert(`Soma com conversão: ${soma}`);
alert(`Soma sem conversão: ${somaString}`);