'use strict';
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

let calculator = {
    read() {
        let prompt1 = +prompt("Número 1");
        let prompt2 = +prompt("Número 2");
        this.a = prompt1;
        this.b = prompt2; 
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
