'use strict';
//Crie uma função `greet(name)` que mostre `"Olá, <name>!"`.

// - Teste com `"Ana"` e `"Pedro"`.
// - O que acontece se você chamar sem argumento?

function greet(name) {
    console.log(`Olá, ${name}!`);
}

greet('Ana');
greet('Pedro');
greet(); //Default = undefined