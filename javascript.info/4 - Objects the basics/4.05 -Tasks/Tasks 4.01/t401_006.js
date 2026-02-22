'use strict';
//Monte um objeto 'inventory' com propriedades 'apples', 'bananas' e 'oranges'. Use um loop 'for..in' para listar todas as propriedades e seus valores.

let inventory = {
    apples: 17,
    bananas: 24,
    oranges: 10,
};

function listObjPropNValue(obj){
    console.log("Inventário:")
    for (let prop in obj) {
        console.log(`- ${prop}: ${obj[prop]}`);
    }
}

listObjPropNValue(inventory);