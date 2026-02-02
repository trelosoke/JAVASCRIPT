'use strict';
//Pergunte a nota de um aluno e diga se está aprovado (>= 7).

let nota = +prompt("Nota do aluno:");

if (nota >= 7 && nota <= 10) {
    alert("Aprovado");
} else if (nota < 7) {
    alert("Reprovado");
} else {
    alert("Pontuação apenas de 0 à 10.")
}