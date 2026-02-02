'use strict';
//Crie uma função que pede a idade com prompt e retorna se pode dirigir (idade >= 18).

function identificarIdade() {
    let idade = +prompt("Qual sua idade?", '');
    return idade;
}

function permitDirigir(idade) {
    return idade >= 18;
}

let idadeUser = identificarIdade();
console.log(permitDirigir(idadeUser));