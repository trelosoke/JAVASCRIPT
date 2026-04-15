'use strict';
/* 
Write the function sumInput() that:

1. Asks the user for values using prompt and stores the values in the array.
2. Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
3. Calculates and returns the sum of array items.

- P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
    let arrayStorage = [];

    while (true) {
        let userValue = prompt("Digite quais quer números e saia da iteração entrando algo vazio, algo não numérico ou cancelando");

        if (userValue === "" || userValue === null || !isFinite(userValue)) break;

        arrayStorage.push(+userValue);
    }

    let arraySum = 0;
    for(let index of arrayStorage) {
        arraySum += index;
    }

    return arraySum;
}

alert(sumInput());