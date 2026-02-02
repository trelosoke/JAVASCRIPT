'use strict';
//Crie uma função que pede um número e usa switch para dizer se é 1 (“um”), 2 (“dois”), ou outro (“outro número”)

function obterNumero() {
    let numero = +prompt("Digite qualquer número:");
    return numero;
}

function binarioOuNao() {
    switch (obterNumero()) {
        case 1:
            alert("É o número 1 'um'.");
            break;

        case 2:
            alert("É o número 2 'dois'.");
            break;

        default:
            alert("Outro número");
    }
}

binarioOuNao();