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

//sort(função)
    //A chamada de '.sort()' ordena (tradução de "sort") o array diretamente no original (in place), alterando a ordem de seus elementos.

    //Também retorna o array ordenado, mas o valor retornado é, normalmente, ignorado, já que o array em si é modificado.

    //Por exemplo:

        arr = [1, 2, 15];

        //O método reordena o conteúdo de 'arr'
        arr.sort();

        console.log(arr); //[ 1, 15, 2 ]

    //Notou algo estranho?

    //A ordem se tornou '1, 15, 2'. Incorreto. Mas por quê?

    // !-- Os itens são ordenados como strings por padrão.

    //De forma literal, todos os elementos são convertidos para strings nas comparações. Para strings, o ordenamento lexicográfico é aplicado e de fato "2" > "15", pois é avaliado de índice em índice. "2" > "1" já retorna 'true', então nem chega a considerar o "5".

    //Para usar nossa própria ordem de ordenação , precisamos fornecer uma função como argumento de '.sort()'.

    //A função deve compara dois valores e retornar:

        function comparar(a, b) {
            if (a > b) return 1; //se o primeiro valor é maior que o segundo
            if (a == b) return 0; //se são iguais
            if (a < b) return -1; //se o primeiro valor é menor que o segundo
        }

    //Por exemplo, para ordenar em números:

        function compararNumeros(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }

        arr = [1, 2, 15];

        arr.sort(compararNumeros);

        console.log(arr); //1, 2, 15

    //Agora funciona como deveria.

    //Vamos dar um passo para trás e pensar sobre o que está acontecendo:
        //O 'arr' pode ser um array com qualquer tipo, certo? Ele pode conter números, strings, objetos ou qualquer outro tipo. 
        
        //Nós temos um conjunto de alguns itens. Para ordená-lo, precisamos de uma função de ordenação que sabe como comparar seus elementos. O padrão é uma ordem de strings.
        
        //O método '.sort(função)' implementa um algoritmo de ordenação genérico. Não precisamos nos preocupar como funciona internamente (um 'quicksort' ou 'Timsort' na maioria do tempo). Ele irá percorrer o array, comparar seus elementos usando a função fornecida e reordená-los, tudo que precisamos é prover a 'função' que faz essas comparações.
        
        //A propósito, se em algum momento quisermos saber quais elementos são comparados, nada nos impede de mostrá-los no console ou dar 'alert':

            arr = [1, -2, 15, 2, 0, 8];
            arr.sort(function(a, b) {
                console.log(a + " <> " + b);
                return a - b;
            });

            console.log(arr);

        //O algoritmo deve comparar um elemento com múltiplos outros no processo, mas tenta fazer menos comparações possíveis.


                        //Uma função de comparação deve retornar qualquer número
                            //Na verdade, uma função de comparação apenas é necessária para retornar um número positivo para dizer "maior" e um número negativo para dizer "menor".

                            //Isso permite escrever funções menores:

                                arr = [1, 2, 15];

                                arr.sort(function(a, b) {return a * b});

                                console.log(arr); //1, 2, 15

                        //Arrow function para o seu bem
                            //Lembra de arrow function? Podemos utilizá-las aqui para uma ordenação mais limp:

                                arr.sort( (a, b) => a - b );

                            //Isso funciona exatamente como a versão maior mais acima.

                        //Use 'locateCompare' para strings
                            //Lembra do algoritmo de comparação de strings? Compara letra por letra pelos seus códigos por padrão.

                            //Para muitos alfabetos, é melhor utilizar o método '.locateCompare' para ordenar letras corretamente, como 'Ö'.

                            //Por exemplo, vamos ordenar alguns países em alemâo:

                                let countries = ['Österreich', 'Andorra', 'Vietnam'];

                                console.log( countries.sort( (a, b) => a > b ? 1 : -1 ) ); //[ 'Andorra', 'Vietnam', 'Österreich' ] (errado)

                                console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); //[ 'Andorra', 'Österreich', 'Vietnam' ]