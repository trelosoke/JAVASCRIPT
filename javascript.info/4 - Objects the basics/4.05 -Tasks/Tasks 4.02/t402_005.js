'use strict';
//Crie dois objetos diferentes com as mesmas propriedades e compare-os usando == e ===. Explique o resultado.

let obj1 = {
    nome: 'treloso',
};

let obj2 = {
    nome: 'treloso',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);

//Nenhum retorna true, pois mesmo tendo as mesmas exatas propriedades, são dois objetos diferentes armazenados na memória.