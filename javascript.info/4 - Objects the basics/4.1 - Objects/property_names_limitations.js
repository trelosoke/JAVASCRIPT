'use strict';
//Não tem limitações quanto às palavras reservadas
let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log(obj.for + obj.let + obj.return); //6

//O número 0 é convertido para string
let num = {
    0: 'test'    //O mesmo que "0" : "test"
};

console.log(num[0]);
console.log(num['0']);

//__proto__
let proty = {};
obj.__proto__ = 5;
console.log(proty.__proto__); //Protótipo. Nada útil nesse momento.