'use strict';
// Write a function 'countBooleanProperties(obj)' that counts how many boolean properties an object has
// Example: countBooleanProperties({a: true, b: false, c: 'hello'}) → 2

function countBooleanProperties(obj){
    if(typeof obj !== 'object' || obj === null){
        throw new Error('Trabalhe apenas com objetos.');
    }

    let cont = 0;
    for(let prop in obj){
        if(typeof obj[prop] === 'boolean') cont++;
    }

    return cont;
}

let obj = {
    cor: 'Azul',
    isCube: true,
    isSphere: false
}

console.log(countBooleanProperties(obj));