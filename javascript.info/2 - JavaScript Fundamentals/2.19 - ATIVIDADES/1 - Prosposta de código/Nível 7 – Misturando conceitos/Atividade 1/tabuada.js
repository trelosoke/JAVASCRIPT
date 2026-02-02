'use strict';
//Crie uma função que recebe um número e imprime sua tabuada de 1 a 10 usando for.

function calcTabuada(n) {
    for (let i = 1; i < 11; i++){
        console.log(n * i);
    }
}

calcTabuada(7);