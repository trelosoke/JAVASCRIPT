'use strict';
//What will the code below output?

console.log( console.log(1) || 2 || console.log(3) );

//1 e depois, 2

//O "console.log(1)" não retorna um valor, retorna undefined. O primeiro operando é avalidado e retorna a mensagem (1). Como undefined é um valor false, ele vai para o próximo até ser true (2).

//Resumindo, console.log(1) não retorna porque é true, mas porque ele foi avalidado e o código executado. Já o 2 retorna por ser o primeiro true.