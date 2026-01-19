'use strict';
//Write the code which outputs prime numbers in the interval from 2 to n.

/* An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */

let n = 10;

for (let i = 2; i < 11; i++) {
    let primo = true;
    for (let j = 2; j < i; j++){
        if(i % j === 0) {
            primo = false;
            break;
        }
    }
    
    if (primo) {
        console.log(i);
    }
}


primo:
for (let i = 2; i < n; i++){

    for (let j = 2; j < i; j++){
        if (i % j === 0) continue primo;
    }

    console.log(i);
}

    //NAO LEMBRO MAIS COMO ISSO FUNCIONA
















// let n = 20;


// for(let i = 2; i <= n; i++){
//     let ehPrimo = true;

//     for(let j = 2; j < i; j++){
//         if(i % j === 0){
//             ehPrimo = false;
//             break;
//         }
//     }

//     if(ehPrimo){
//         console.log(`${i} é primo!`);
//     } else {
//         console.log(`${i} não é primo!`);
//     }
// }

