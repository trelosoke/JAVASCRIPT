'use strict';
// Write a function 'invertWithPrefix(obj, prefix)' that:
// 1. Receives an object and a prefix string
// 2. Returns a NEW object where:
//    - Each value becomes the key (same validation as before)
//    - Each original key becomes the value WITH the added prefix
// 3. Same error handling as original

// Example:
invertWithPrefix({ fruit: 'apple', color: 'red' }, 'item_') 
// Should return { apple: 'item_fruit', red: 'item_color' }

// Error cases remain identical to original

function invertWithPrefix(obj, prefix){
    if(typeof obj !== 'object' || obj === null){
        throw new Error('Trabalhe apenas com objetos.');
    }

    const inverted = {};
    for(let prop in obj){
        inverted[obj[prop]] = prefix + prop;
    }

    return inverted;
}

let obj = {
    num: 10,
    arroz: 'feijão'
}

console.log(invertWithPrefix(obj, 'malakoi_'));''