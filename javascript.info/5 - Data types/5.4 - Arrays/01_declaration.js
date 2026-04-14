'use strict';
//Declaração (declaration)
    //Há duas sintaxes para criar um array vazio:
        let arr1 = new Array(); //constructor
        let arr2 = []; //literal
    
    //Na maioria das vezes, a segunda sintaxe é utilizada. Podemos fornecer elementos iniciais nos colchetes:
        let frutas = ["Maçã", "Laranja", "Ameixa"];

    //Elementos array são numerados, começando com 0.
    //Podemos obter um elemento por meio de seu número em colchetes:
        frutas = ["Maçã", "Laranja", "Ameixa"];

        console.log(frutas[0]); //Maça
        console.log(frutas[1]); //Laranja
        console.log(frutas[2]); //Ameixa

    //Podemos substituir o elemento:
        frutas[2] = 'Pera'; //Agora ["Maçã", "Laranja", "Pera"]

    //…ou adicionar um novo no array:
        frutas[3] = 'Limão'; //Agora ["Maçã", "Laranja", "Pera", "Limão"]

    //A conta total dos elementos no array é seu "length":
        frutas = ["Maçã", "Laranja", "Ameixa"]

        console.log(frutas.length); //3

    //Podemos também fazer um 'alert' ou um 'console.log' para mostrar o array inteiro:
        console.log(frutas); //[ 'Maçã', 'Laranja', 'Ameixa' ]


    //Um array pode armazenar elementos de qualquer tipo:
        //mistura de valores
        let arr = ["Maçã", {name:'John'}, true, function() {console.log('Olá')}];

        //obter o objeto no index 1 e mostrar seu 'name'
        console.log(arr[1].name); //John

        //obter a função no index 3 e executá-la
        arr[3](); //Olá


                //Vírgula final (trailling comma)
                    //Um array, assim como um objeto, deve terminar com uma vírgula:
                    let fruits = [
                        "Apple",
                        "Orange",
                        "Plum",
                    ];

                    //O estílo "trailling comma" (a vírgula ao final de "Plum", mesmo não havendo elemento depois) facilita a inserção/remoção se itens, pois todas as linhas se tornam iguais.