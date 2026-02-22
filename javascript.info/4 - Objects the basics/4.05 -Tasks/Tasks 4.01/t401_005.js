'use strict';
//Crie um objeto 'person' com propriedades 'name', 'age' e 'city'. Use o operador 'in' para verificar se a propriedade "age" existe nesse objeto.

let person = {
    name: "Rodrigo",
    age: 28,
    city: 'Fortaleza',
};

function checkObjProp(obj, prop) { 
    return prop in obj;
}

console.log(checkAgeObjProp(person, 'age'));