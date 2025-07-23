'use strict';
/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/

let idade = 10;

if(!(idade >= 14 && idade <= 90)){
    console.log('Negado');
} else {
    console.log('Permitido');
}

if(idade < 14 || idade > 90){
    console.log('Negado');
} else {
    console.log('Permitido');
}