'use strict';
//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops console.log the same values, or not?

//The prefix form ++i:

let i = 0;
while (++i < 5) console.log( i ); //1, 2, 3, 4

//The postfix form i++

let j = 0;
while (j++ < 5) console.log( j ); //0, 1, 2, 3, 4

//Resposta: não. Na forma de prefixo, o valor primeiro foi adicionado, ou seja, antes mesmo de compara se 'i' era menor que 5, 'i' foi adicionado por um. Logo, a ordem fica: 1, 2, 3, 4. Já na forma de sufixo, o valor primeiro é avaliado e condicionado, sendo depois, adicionado por um. Logo, a ordem fica: 0, 1, 2, 3, 4.