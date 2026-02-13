'use strict';
//Crie uma função que cria um objeto local e depois termina. Mostre que o objeto se torna inacessível após o fim da função.

function createLocalObject() {
    let localObj = {
        name: 'trelo',
        age: 22,
    };

    console.log(localObj);
}

createLocalObject();
console.log(localObj); //Não existe, não foi retornado