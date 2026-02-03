'use strict';
//Crie uma função que pede um número e mostra todos os múltiplos de 3 até esse número.

function getNumber() {
    let number = prompt("Digite um número");
    if (number === null || isNaN(+number)){
        alert("Digite um número válido");
        return null;
    }
    return +number;
}

function showMultiplesOfThree(limit) {
    for (let i = 3; i <= limit; i++) {
        if ((i % 3) === 0) {
            alert(i);
        }
    }
}

let number = getNumber();
if (number !== null) {
    showMultiplesOfThree(number);
}