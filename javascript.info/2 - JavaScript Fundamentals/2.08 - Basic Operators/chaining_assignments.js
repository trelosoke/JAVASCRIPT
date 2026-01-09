'use strict' //Da direita para a esquerda. 

let a, b, c;

a = b = c = 2 + 2;

c = 2 + 2;
b = c;
a = b;

console.log(a, b, c)