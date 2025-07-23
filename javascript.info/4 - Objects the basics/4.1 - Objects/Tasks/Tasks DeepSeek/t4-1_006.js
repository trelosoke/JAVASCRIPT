'use strict';
// Write a function 'countProperties(obj)' that returns the number of properties in an object
// Example: countProperties({a: 1, b: 2}) should return 2

function countProperties(obj){
    let count = 0;
    for(let prop in obj){
        count++;
    }

    return count;
}

let obj = {
    a: 2,
    b: 3,
    c: 4
};

console.log(countProperties(obj));