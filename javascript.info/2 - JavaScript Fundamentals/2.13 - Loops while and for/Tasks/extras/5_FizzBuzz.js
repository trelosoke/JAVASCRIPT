'use strict';
//1. **FizzBuzz clássico**
//Para números de 1 até `n`:
//    - Se múltiplo de 3 → escreva `"Fizz"`.
//    - Se múltiplo de 5 → escreva `"Buzz"`.
//    - Se múltiplo de 3 e 5 → escreva `"FizzBuzz"`.
//    - Caso contrário → escreva o próprio número.

let n = 100;

for (let i = 1; i <= n; i++) {

    if (i % 5 === 0 && i % 3 === 0){
        console.log(`${i} é FizzBuzz!`)
    } else if (i % 5 === 0) {
        console.log(`${i} é Buzz!`)
    } else if (i % 3 === 0) {
        console.log(`${i} é Fizz!`)
    } else {
        console.log(i);
    }
}

//forma mais enxuta
for (let i = 1; i <= n; i++) {
    let saida = "";
    if (i % 3 === 0) saida += "Fizz";
    if (i % 5 === 0) saida += "Buzz"
    
    if (saida) saida += "!"
    console.log(saida || i);
}