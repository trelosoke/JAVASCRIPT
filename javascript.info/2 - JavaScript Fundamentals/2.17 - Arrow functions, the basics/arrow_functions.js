'use strict';
let sum = (a, b) => a + b;
// Forma curta de:
// let sum = function(a, b){
//   return a + b;
// }
console.log(sum(2, 3));

//Um parâmetro
let double = n => n * 2;
//Os parênteses podem ser omitidos nesse caso.
console.log(double(3));

//Nenhum parâmetro
let sayHi = () => console.log('Hi');
//Nesse caso, necessita dos parênteses, mas vazios.
sayHi();

//Usados da mesma forma que Functions Expressions
let age = 12;

let message = (age < 18) ? 
  () => console.log('Negado') :
  () => console.log('Concedido');

message();