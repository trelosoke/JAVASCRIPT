'use strict';
//Write an if condition to check that age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, the second one – without it.

let age = 13;
let ageCheck;
    
if (!(age >= 14 && age <= 90)) {
    ageCheck = false;
}

console.log(ageCheck);


if (age < 14 || age > 90) {
    ageCheck = false;
}

console.log(ageCheck);