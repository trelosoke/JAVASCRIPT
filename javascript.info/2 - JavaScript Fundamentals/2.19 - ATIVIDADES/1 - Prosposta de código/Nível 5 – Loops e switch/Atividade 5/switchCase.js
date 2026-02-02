'use strict';
//Pergunte um número de 1 a 7 e mostre o dia da semana correspondente usando switch.

let numSemana = +prompt("Digite um número. Ele equivalerá ao dia da semana correspondente.", '');

switch (numSemana) {
    case 1:
        alert("Domingo");
        break;
    
    case 2:
        alert("Segunda-feira");
        break;

    case 3:
        alert("Terça-feira");
        break;

    case 4:
        alert("Quarta-feira");
        break;

    case 5:
        alert("Quinta-feira");
        break;

    case 6:
        alert("Sexta-feira");
        break;

    case 7:
        alert("Sábado");
        break;

    default:
        alert("Digite um número válido e entre 1 e 7, incluindo-os.")
}