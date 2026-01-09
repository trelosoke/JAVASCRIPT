'use strict';
// Write a function 'compareObjects(obj1, obj2)' that returns true if both objects have
// exactly the same properties and values (for primitive values only)
function equalObjects(obj1, obj2){
    if(typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null){
        throw new Error('Utilize objetos com propriedades.');
    }

    for(let prop in obj1){
        if(!(prop in obj2)){
            return false;
        }

        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }

    for(let prop in obj2){
        if(!(prop in obj1)){
            return false;
        }
    }

    return true;
}

let obj1 = {
    motor: 'V8',
    freio: 'ABS'
};

let obj2 = {
    motor: 'V8',
    freio: 'ABS'
};

console.log(equalObjects(obj1, obj2));