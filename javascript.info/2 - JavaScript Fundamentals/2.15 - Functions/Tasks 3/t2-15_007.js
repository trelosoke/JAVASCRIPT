'use strict';
//Crie uma função `sum(a, b)` que retorne a soma de dois números.

// - Teste com `sum(2, 3)` e `sum(10, -5)`.
// - Use o resultado em outra operação: `sum(2,3) * 2`.

function soma(a, b) {
    return a + b
}

function exibirSoma(a, b) {
    let resultado = soma(a, b);
    console.log(resultado);
}

exibirSoma(2, 3);
exibirSoma(10, -5);
console.log(soma(2, 3) * 2);