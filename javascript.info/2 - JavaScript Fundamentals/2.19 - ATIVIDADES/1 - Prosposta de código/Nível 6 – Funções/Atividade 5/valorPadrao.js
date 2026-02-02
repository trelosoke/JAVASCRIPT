'use strict';
//Crie uma função saudar(nome = "Visitante") que mostra uma saudação.

function saudar(nome) {
    let nullCase = nome ?? "Visitante";
    console.log(`Olá, ${nullCase}!`);
}

saudar();
saudar(undefined);
saudar(null);