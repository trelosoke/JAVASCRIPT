'use strict';
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    for(let prop in obj){
        return false;
    }

    return true;
}

console.log(isEmpty({a: 2}));