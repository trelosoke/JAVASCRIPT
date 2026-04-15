'use strict';
//toString
    //Arrays têm suas próprias implementações do método 'toString' que retorna uma lista de elementos separados por vígula:
        let array = [1, 2, 3];

        console.log(array); //[ 1, 2, 3 ]
        console.log(String(array)); //1,2,3

    //Também, vamos tantar isso:
        console.log([] + 1); //"1"
        console.log([1] + 1); //"11"
        console.log([1,2] + 1); //"1,21"

    //Arrays não têm 'Symbol.toPrimitive', nem um 'valueOf' viável, eles implementam apenas conversão 'toString', então aqui '[]' torna-se uma string vazia, [1] torna-se "1" e [1,2] torna-se "1,2".

    //Quando o operador "+" binário adicionar algo para uma string, ele o converte para string também, então o próximo passo seria assim:
        console.log( "" + 1 ); // "1"
        console.log( "1" + 1 ); // "11"
        console.log( "1,2" + 1 ); // "1,21"