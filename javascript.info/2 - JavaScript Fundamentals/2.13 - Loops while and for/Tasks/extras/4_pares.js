'use strict';
//Números pares  
//Mostre todos os números pares de 2 até n.
//Dica: use continue para pular os ímpares.

let n = 20;

for (let i = 1; i <= n; i++){
    if (!(i % 2 === 0)) continue;
    console.log(i);
}