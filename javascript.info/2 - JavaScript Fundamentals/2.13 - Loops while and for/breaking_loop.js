'use strict';
let sum = 0;
while (true){

    let value = +prompt('Enter a number', '');

    if(!value) break;

    sum += value;
}; //Vai continua no loop até apertar Esc (null), entrar uma string, string vazia. 

console.log('Soma: ' + sum);