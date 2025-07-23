'use strict';
//Crie uma função criarMultiplicador(fator) que retorna uma função que multiplica pelo fator.
function criarMultiplicador(fator){
    return function(numero){
        return numero * fator
    }
}

const dobrar = criarMultiplicador(2);

console.log(dobrar(5));

//Isso tem a ver com closure. Nada que eu saiba, então deixa para outro momento.