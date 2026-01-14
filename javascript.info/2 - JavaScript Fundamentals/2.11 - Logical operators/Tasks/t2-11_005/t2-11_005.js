'use strict';
//What will the result be?

console.log( null || 2 && 3 || 4 ); //3

//Processo:
// 1(&&). Qual é false: 2 ou 3? Nenhum. Retorno o último operando: 3.
// 2(||). Qual, da esquerda para a direita, é o primeiro truthy? 3. O 4 não é avaliado. 