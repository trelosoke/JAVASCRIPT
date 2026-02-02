'use strict';
//Crie uma variável contador = 0 e incremente com ++ três vezes, mostrando o resultado.

let contador = 0;

console.log(++contador);
console.log(++contador);
console.log(++contador);

//OU

contador = 0;
for (let i = 0; i < 3; i++){
    console.log(++contador);
}