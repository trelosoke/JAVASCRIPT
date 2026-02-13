'use strict';
//Crie um objeto com referência circular (ex.: obj.self = obj) e clone-o com structuredClone.

let obj = {};
obj.eu = obj;

let objClone = structuredClone(obj);

console.log(objClone);