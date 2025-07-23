'use strict';
//Teste chamar a saudar() antes de ela estar definida.Depois, tente isso com uma expressão de função e compare o comportamento.

saudar();

function saudar(nome = 'visitante'){
    console.log(`Olá, ${nome}!`);
}



let saudar2 = (nome = 'visitante') => {
    console.log(`Olá, ${nome}!`)
}

saudar2();