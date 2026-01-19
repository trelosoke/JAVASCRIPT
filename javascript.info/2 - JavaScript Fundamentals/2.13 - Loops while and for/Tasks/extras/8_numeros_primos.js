'use strict';
// ! -- REFAZER DEPOIS COM USO DE FUNÇÕES -- !

//Números primos (variação)
//Em vez de listar todos os primos até n, faça um programa que conte quantos primos existem nesse intervalo.
//Exemplo: n = 10 → saída: 4 (2, 3, 5, 7).

let n = 11;
let comprimento = 0;
let numeros = ``;
let numPrimeiro;
let numUltimo;

for (let i = 2; i <= n; i++) {
    let primo = true;

    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            primo = false;
            break;
        }
    }

    if(primo) {
        numUltimo = i;
    }
}

for (let i = 2; i <= n; i++) {
    let primo = true;

    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            primo = false;
            break;
        }
    }

    if(primo) {
        comprimento += 1;
        if (i == 2) {
            numPrimeiro = true; 
            if(numPrimeiro == true) numeros += `(`;
        } else {
            numPrimeiro = false;
        }

        numeros += `${i}`;
        
        if (i === numUltimo) {
            numeros += `) `;
        } else {
            numeros += `, `
        }
    }
}

comprimento = String(comprimento);
comprimento += ` `;
let primos = comprimento + numeros;

console.log(primos);