'use strict';
//Modifique saudar(nome) para que, se nenhum nome for passado, diga "Olá, visitante!".
function saudar(nome = 'visitante'){
    console.log(`Olá, ${nome}!`);
}

saudar()