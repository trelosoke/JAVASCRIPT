'use strict';
let n = 10;
n = 11;

//operadores
let divisao = (n + 2);
console.log(divisao);

//Valores numéricos especiais
console.log(1 / 0); //Infinito, maior que qualquer número
console.log(Infinity); //Infinito

console.log('not a number' / 2); //NotaNumber(NaN)
console.log(NaN + 1); //Qualquer operação com NaN quase sempre retorna NaN
console.log(NaN ** 0); //Exceto nesse caso, pois qualquer coisa, mesmo que um não número, for elevada a 0, sempre resultará em "1"