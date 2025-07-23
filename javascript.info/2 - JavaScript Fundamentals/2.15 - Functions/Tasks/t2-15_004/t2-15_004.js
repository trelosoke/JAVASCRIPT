'use strict';
//Write a function pow(x,n) that returns x in power n. Or, in other words, 
// multiplies x by itself n times and returns the result.
// P.S. In this task the function should support only natural values of n: integers up from 1.
//Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
function pow(x, n){
    let result = 0;

    for(let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

let xNum = +prompt('Número x');
let nNum = +prompt('Número n');

if(nNum >= 1){
    alert(`Número ${xNum} elevado a ${nNum} é igual a ${pow(xNum, nNum)}`);
} else if(nNum === 0){
    alert('Todo número elevado a 0 resulta em 1.');
} else {
    alert('Digite um número maior que 1.');
}