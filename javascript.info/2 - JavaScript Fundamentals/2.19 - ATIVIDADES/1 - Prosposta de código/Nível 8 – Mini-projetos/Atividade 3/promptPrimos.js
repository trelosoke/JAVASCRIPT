'use strict';
//Crie um programa que pede um número e mostra se ele é primo (usando for e if).

let number = +prompt("Digite qualquer número");

function checkIsPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

function showNumber() {
    if (isNaN(number)) {
        alert("Digite um número válido.");
    } else if (checkIsPrime(number)) {
        alert(`O número ${number} é primo`);
    } else if (!checkIsPrime(number)) {
        alert(`O número ${number} não é primo`);
    }
}

showNumber();

//MELHORAR DEPOIS A QUESTÃO DE O NÚMERO SER DE OUTRO TIPO. PROVISÓRIAMENTE, ESSE CASO FUNCIONA, MAS NÃO EM TODOS OS CRITÉRIOS.