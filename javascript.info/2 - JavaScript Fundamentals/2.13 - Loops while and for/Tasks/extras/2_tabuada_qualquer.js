'use strict';
// Peça ao usuário um número qualquer (via prompt) e mostre a tabuada desse número de 1 até 10.
// Além disso, se o resultado da multiplicação for par, escreva "→ par" ao lado; se for ímpar, escreva "→ ímpar".

let multNumber = +prompt("Insira qualquer número que será mostrada sua tabuada:", '');

let limiteTabuada = +prompt("Insira o limite do número de multiplicação da tabuada");

for (let i = 1; i <= limiteTabuada; i++) {
    let resultado = multNumber * i;
    if (resultado % 2 === 0) {
        alert(`${multNumber} x ${i} = ${resultado} → par` );
    } else {
        alert(`${multNumber} x ${i} = ${resultado} → ímpar` );
    }
}