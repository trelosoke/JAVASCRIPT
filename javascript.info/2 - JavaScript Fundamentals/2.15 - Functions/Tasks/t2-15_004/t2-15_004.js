'use strict';
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let potenciaBase = +prompt('Base da potência:');
let potenciaExpo = +prompt('Expoente da potência:');

if (potenciaExpo < 0) {
    alert(`O expoente ${potenciaExpo} não é suportado. Utilize um número positivo inteiro.`)
} else {
    alert(`Resultado: ${pow(potenciaBase, potenciaExpo)}`);
}