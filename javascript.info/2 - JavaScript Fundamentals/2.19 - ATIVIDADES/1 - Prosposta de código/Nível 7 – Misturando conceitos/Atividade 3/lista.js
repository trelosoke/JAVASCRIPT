'use strict';
//Crie uma função que recebe uma lista de números e retorna apenas os pares usando for e if.


function apenasPares(numLimite) {
    for (let i = 1; i <= numLimite; i++) {
        if (i % 2 === 0) {
        console.log(i);
        }
    }
}

console.log(apenasPares(20));