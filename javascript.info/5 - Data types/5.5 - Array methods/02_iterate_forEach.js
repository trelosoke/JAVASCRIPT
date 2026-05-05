'use strict';
let arr = [];
//Iterar: 'forEach'
    //O método '.forEach' permite executar uma função para cada elemento do array.
    //A sintaxe:

        arr.forEach(function(/*item, índice, array*/){
            //faz algo com um item
        });

    //Por exemplo, isso mostra cada elemento do array:

        //Para cada elemento, chama 'console.log'
        ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

    //E esse código é mais detalhado sobre suas posições no array de destino:
        ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
            console.log(`${item} está na posição ${index} do array ${array}`);
        });

    //O resultado da função (se retornar um) é jogado fora e ignorado.