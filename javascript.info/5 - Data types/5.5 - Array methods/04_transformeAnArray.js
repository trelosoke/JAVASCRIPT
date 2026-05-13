'use strict';
//Transformar um array
    //Vamos continuar para métodos que transformar e reordenam um array.

//map
    //O método '.map' é um dos mais úteis e frequentemente utilizados.

    //Ele chama uma função para cada elemento do array e retorna o array dos resultados.

    //A sintaxe é:

        let arr = [];
        let resultado = arr.map(function(item, índice, array) {
            //retorna o novo valor ao invés de 'item'
        });

    //Por exemplo, aqui transformamos cada elemento em seu length:
        
        let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
        console.log(lengths); //[ 5, 7, 6 ]