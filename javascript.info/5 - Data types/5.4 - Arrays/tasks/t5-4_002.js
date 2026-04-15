'use strict';
/* 
Let’s try 5 array operations.

1. Create an array 'styles' with items “Jazz” and “Blues”.
2. Append “Rock-n-Roll” to the end.
3. Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
4. Strip off the first value of the array and show it.
5. Prepend 'Rap' and 'Reggae' to the array.

The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

let styles = ["Jazz", "Blues"];

    console.log(styles);

styles.push("Rock-n-Roll");

    console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

    console.log(styles);

console.log(styles.shift());

    console.log(styles);

styles.unshift("Rap", "Reggae");

    console.log(styles);