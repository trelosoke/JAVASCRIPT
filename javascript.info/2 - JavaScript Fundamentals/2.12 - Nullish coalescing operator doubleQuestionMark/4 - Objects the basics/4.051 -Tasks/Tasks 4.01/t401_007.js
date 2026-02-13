'use strict';
//Crie um objeto 'codes' com propriedades numéricas como chaves (1: "A", 2: "B", 10: "C"). Itere com 'for..in' e observe a ordem de saída das propriedades.

let codes = {
    1: "a",
    2: "b",
    10: "c",
};

for (let prop in codes) {
    console.log(`- ${prop}: ${codes[prop]}`);
}

//Funciona normalmente. O número é convertido para string