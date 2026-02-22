'use strict';
//Use 'structuredClone' para duplicar um objeto com propriedades aninhadas (dimensions, preferences). Mostre que alterações em um não afetam o outro.

let obj = {
    dimensions: {
        width: 120,
        height: 44,
    },
};

let objClone = structuredClone(obj);

console.log(objClone);

obj.dimensions.height = 18;
console.log(objClone); //O clone não foi alterado