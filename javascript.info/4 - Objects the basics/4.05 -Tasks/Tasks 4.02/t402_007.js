'use strict';
//Tente clonar um objeto que contém uma função usando structuredClone. Observe o resultado e explique por que a função não é clonada.

let obj2 = {
    funcao() {
        console.log("Nada");
    },
};

let obj2CLone = structuredClone(obj2);

console.log(obj2CLone); //erro. 'structuredClone' clona aprenas dados e objetos simples. Como as funções são entidades mais complexas, que envolvem execução, contexto, variáveis externas, etc, esse tipo de clonagem não consegue lidar.