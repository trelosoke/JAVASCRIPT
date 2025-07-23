'use strict';
//Operador ternário (três operandos)
let acessoPerm;
let idade = 19;

if(idade >= 18){
    acessoPerm = true;
} else {
    acessoPerm = false;
}

//Ou simplesmente
acessoPerm = (idade >= 18) ? true : false; //Nesse caso, nem é necessário usar o operador, pois "idade >= 18" já retorna um valor boolean.

console.log(acessoPerm)