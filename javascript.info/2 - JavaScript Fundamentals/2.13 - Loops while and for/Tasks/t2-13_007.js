'use strict';
//Write the code which outputs prime numbers in the interval from 2 to n.
let n = 20;


for(let i = 2; i <= n; i++){
    let ehPrimo = true;

    for(let j = 2; j < i; j++){
        if(i % j === 0){
            ehPrimo = false;
            break;
        }
    }

    if(ehPrimo){
        console.log(`${i} é primo!`);
    } else {
        console.log(`${i} não é primo!`);
    }
}

