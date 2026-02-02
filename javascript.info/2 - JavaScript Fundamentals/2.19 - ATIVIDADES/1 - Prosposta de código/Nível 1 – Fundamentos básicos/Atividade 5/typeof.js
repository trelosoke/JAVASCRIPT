'use strict';
//Declare variáveis de diferentes tipos (string, number, boolean, null, undefined) e use typeof para mostrar seus tipos.

let strg = 'Isso é uma string'; //Usados para qualquer texto.

let number = 12; //Usado para números. Tem o auxiliar "BigInt"
let BigInt = 2893748029342823475092432443235n + 2n // Usado para números maiores que o Número Inteiro Máximo Seguro, a fim de precisão.

let boolean = false; //Usado para confirmação, comparação, condições, etc.

let Null = null; //Usado para definir algo como vazio ou desconhecido.

let Undefined = undefined; //Usado para valores não definidos.

console.log(typeof strg);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof Null); //Null não é objeto. Pequeno erro do próprio JS.
console.log(typeof Undefined); 