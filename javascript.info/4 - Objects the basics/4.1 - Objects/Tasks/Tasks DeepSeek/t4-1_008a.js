'use strict';
// Write a function 'cloneObject(obj)' that returns a shallow copy of an object
// The function should work for any object with primitive values

function cloneObject(obj){
    let clonado = {};
    for(let prop in obj){
        clonado[prop] = obj[prop];
    }

    return clonado;
}

let obj = {
    salario: 1200,
    idade: 28,
};

console.log(cloneObject(obj));