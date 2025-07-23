'use strict';
//For every loop iteration, write down which value it outputs and then compare 
// it with the solution. Both loops alert the same values, or not?
let i = 0;
while (++i < 5) alert( i ); //Aqui, i é adicionado primeiro e depois mostra-se 
// seu valor. Logo, as iterações retornam: 1, 2, 3 e 4

i = 0;
while (i++ < 5) alert( i ); //Aqui, o valor antigo de i é usado primeiro e 
// depois adicionado por 1. Logo, as iterações retornam: 1, 2, 3, 4 e 5.