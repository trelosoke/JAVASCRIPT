'use strict';
let a = 0;
let b = 6;
console.log(a ?? b); //Só não funciona caso a for undefined/null. Ele pega o 
// valor definido, seja 0 ou etc.

console.log(a !== null && a !== undefined ? a : b);

let user = 'John'; 
console.log(user ?? 'Anônimo');

let x = (1 && 2) ?? 3; //Não podem ser combinadas sem parênteses, mesmo ?? 
// tendo a mesma prioridade que ||.