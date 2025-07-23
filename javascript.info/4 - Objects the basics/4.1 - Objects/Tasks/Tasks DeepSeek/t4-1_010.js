'use strict';
// Write a function 'mergeObjects(obj1, obj2)' that merges two objects
// If both objects have the same property, obj2's property should overwrite obj1's

function mergeObjects(obj1, obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        throw new Error('Use apenas objetos com propriedades.');
    }

    let merged = {};
    for(let prop in obj1){
        merged[prop] = obj1[prop];
    }

    for(let prop in obj2){
        merged[prop] = obj2[prop];
    }

    return merged;
}

let obj1 = {
    a: 12,
    b: 2,
    c: 14
}

let obj2 = {
    a: 15,
    d: 13,
    e: 53
}

console.log(mergeObjects(obj1, obj2));