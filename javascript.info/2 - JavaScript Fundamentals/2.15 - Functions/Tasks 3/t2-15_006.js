'use strict';
//Crie uma função `greet(name = "visitante")` que mostre `"Olá, <name>!"`.

// - Teste com `greet("Carlos")` e com `greet()` sem argumento.

function greet(name = "visitante") {
    console.log(`Olá, ${name}!`);
}

greet('Carlos');
greet();