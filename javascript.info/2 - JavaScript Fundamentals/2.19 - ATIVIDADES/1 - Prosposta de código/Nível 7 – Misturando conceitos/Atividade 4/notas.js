'use strict';
//Crie uma função que pede 3 notas com prompt, calcula a média e retorna se o aluno foi aprovado.

function tresNotasUser() {
    let nota;
    let somaNota = 0;
    for (let i = 1; i <= 3; i++) {
        nota = +prompt("Qual sua nota?");
        somaNota += nota;
    }
    return somaNota;
}

let notas = tresNotasUser();

function mediaNotas(somaNota) {
    return somaNota / 3;
}

let media = mediaNotas(notas);

function aprovacao(media) {
    alert(`Sua média: ${media}`);
    alert((media < 7) ? "Reprovado" : "Aprovado");
}

aprovacao(media);