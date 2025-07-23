'use strict';
//Crie uma função executar(fn) que chama fn().Passe dobrar como argumento.
function dobrar(n){
    console.log(2 * n);
}

function executar(fn){
    fn();
}

executar(dobrar());