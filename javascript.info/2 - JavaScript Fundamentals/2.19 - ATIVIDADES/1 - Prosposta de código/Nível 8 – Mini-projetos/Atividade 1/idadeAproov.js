'use strict';
//Crie um programa que pede o nome e idade do usuário, verifica se é maior de idade e mostra uma mensagem personalizada.

let Name = prompt("Indique seu nome:", '');
let age = +prompt("Indique sua idade:");

function checkAge(age, name) {
    return (age < 18) ? alert(`Acesso negado, ${name}.`) : alert(`Acesso Permitido, ${name}.`);
}

checkAge(age, Name);