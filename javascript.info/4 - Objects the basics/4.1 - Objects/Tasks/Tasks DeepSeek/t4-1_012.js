'use strict';
// Write a function 'hasProperty(obj, propName)' that returns true if the object has the property
// Example: hasProperty({color: 'red'}, 'color') → true
// Example: hasProperty({color: 'red'}, 'size') → false

function hasProperty(obj, propName){
    if(typeof obj !== 'object' || obj === null){
        throw new Error('Trabalhe com objetos com propriedades.');
    }

    for(let prop in obj){
        if(propName === prop){  
            return true;
        }
    }

    return false;
}

console.log(hasProperty({color: 'red'}, 'color'));