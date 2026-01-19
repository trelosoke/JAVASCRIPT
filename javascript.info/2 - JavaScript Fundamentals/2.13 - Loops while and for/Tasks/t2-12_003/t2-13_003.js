'use strict';
//For each loop write down which values it is going to show. Then compare with the answer.

//Both loops console.log same values or not?


//The postfix form:

for (let i = 0; i < 5; i++) console.log( i ); //0, 1, 2, 3, 4

//The prefix form:

for (let i = 0; i < 5; ++i) console.log( i ); //0, 1, 2, 3, 4

//São o mesmo valor. Nesse caso, a declaração 'for' sempre executa o código logo após a condição, deixando a incrementação para depois da execução do código. Logo, sempre o valor original é retornado primeiro, depois incrementado.