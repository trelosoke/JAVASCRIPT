'use strict';
//Crie um objeto 'settings' e permita que o usuário escolha via prompt qual propriedade deseja visualizar. Se a propriedade não existir, mostre uma mensagem amigável em vez de 'undefined'.

let settings = {
    isBlocked: false,
    language: 'pt-BR',
};

let userChoice = prompt("Qual propriedade de 'settings' queres ver?");

if (!(userChoice in settings)) {
    do {
        userChoice = prompt("Propriedade inexistente. Tente novamente. Pode ser 'isBlocked' ou 'language'.");
    } while (!(userChoice in settings));
}

alert("A propriedade " + userChoice + " tem o valor '" + settings[userChoice] + "'!");