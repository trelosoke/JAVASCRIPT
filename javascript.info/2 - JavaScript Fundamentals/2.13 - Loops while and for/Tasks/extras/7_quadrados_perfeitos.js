'use strict';
//Quadrados perfeitos
//Mostre todos os quadrados perfeitos menores ou iguais a n.
//Exemplo: se n = 30 → saída: 1, 4, 9, 16, 25.

let n = 16;

for (let i = 1; i <= n; i++){
    if (Number.isInteger(i ** (1 / 2))) {
        console.log(i);
    }
}