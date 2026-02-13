'use strict';
// Write a function 'invertObject(obj)' that swaps keys and values in an object
// Example: invertObject({a: 'x', b: 'y'}) should return {x: 'a', y: 'b'}
// Assume all values are unique strings

function invertObject(obj){
    if(typeof obj !== 'object' || obj === null){
        throw new Error('Trabalhe somente com objetos.');
    }

    const inverted = {};
    for(let prop in obj){
        inverted[obj[prop]] = prop;
    }

    return inverted;
}

let casa = {
    banheiro: true,
    sala: false
};

console.log(invertObject(casa));