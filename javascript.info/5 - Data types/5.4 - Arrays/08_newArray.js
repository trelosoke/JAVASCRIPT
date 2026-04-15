'use strict';
//new Array() --> Constructor
    //Há mais uma sintaxe para criar um array:
        let array = new Array("Maçã", "Pera", "etc");

    //É raramente usada, pois os colchetes [] são menores. Também há um detalhe enganoso com isso.

    //Se um 'new Array' é chamado com um único argumento que é um número, então ele cria um array sem itens, mas com o 'length' fornecido.
    //Vamos ver como um pode "atirar no próprio pé":
        let arr = new Array(2); //vai criar um array de [2] ?

        console.log(arr[0]); //'undefined', sem elementos

        console.log(arr.length); //length 2 --> ???????????

    //Para evitar tais surpresas, normalmente usamos colchetes, a não ser que realmente saibamos o que estamos fazendo.