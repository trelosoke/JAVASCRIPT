'use strict'
//Retorna o tipo do operandotypeof undefined // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  (1)

console.log(typeof null); // "object"  (2) Não é objeto. É puramente um null, data type próprio. Isso é um erro do "typeof"

console.log(typeof alert); // "function"  (3)