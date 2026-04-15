'use strict';
//Uma palavrinha sobre "length"
    //A propriedade 'length' é automaticamente atualizada quando modificamos o array. Para ser preciso, não é realmente a quantidade de valores no array, mas sim o maior índice numérico mais um.

    //Por exemplo, um único elemento com um índice grande retorna um 'length' grande:
        let frutas = [];
        frutas[123] = "Maçã";

        console.log(frutas.length); //124

    //Note que nós normalmente não usamos arrays assim.

    //Outra coisa interessante sobre a propriedade 'length' é que ela é "writable (além de poder lê-la, é possível editá-la)".

    //Se a aumentarmos manualmente, nada interessante acontesse. Mas se a diminuirmos, o array é "cortado (truncated)". O processo é irreverssível, aqui está o exemplo:
        let arr = [1, 2, 3, 4, 5];

        arr.length = 2; //corta (truncate) para 2 elementos
        console.log(arr); //[ 1, 2 ]

        arr.length = 5; //retorna o 'length' para antes
        console.log(arr[3]); //'undefined', os valores não voltam

    //Então, a maneira mais simples de limpar um array é: 'array.length = 0;'