'use strict';

//Limite seguro e inseguro dos números inteiros
//Maior seguro inteiro
const maxSafe = 9007199254740991n;
console.log('Maior número seguro:', maxSafe);

//E se somarmos + 1?
console.log('Maior número seguro: + 1', maxSafe + 1n);//Somou normalmente
console.log('Maior número seguro: + 2', maxSafe + 2n);//Erro, não somou. Arredondou.

//Teste de igualdade
console.log('9007199254740992 === 9007199254740993?', 9007199254740992n === 9007199254740993n);

console.log(0.8 == 0.799999999999999999999999);