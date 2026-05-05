'use strict';
//Procurando no array
    //Agora vamos abordar métodos que procuram em um array.

//'indexOf/lastIndexOf' e 'includes'
    //Os métodos '.indexOf' e '.includes' têm uma sintaxe semelhante e fazem essencialmente o mesmo que seus equivalentes em strings, mas operam em itens ao invés de caracteres:
        //'.indexOf(item, de)' - procura por 'item' começando do índice 'de', retornando o índice onde foi encontrado. Caso contrário, retorna -1.
        //'.includes(item, de)' - procura por 'item' começando do índice 'de', retornando 'true' se encontrado e 'false' caso não. 

    //Normalmente, esses métodos são usados com apenas um argumento: o 'item' a ser procurado. Por padrão, a procura/pesquisa é a partir do começo.

    //Por exemplo:
        let arr = [1, 0, false];

        console.log(arr.indexOf(0)); //1
        console.log(arr.indexOf(false)); //2
        console.log(arr.indexOf(null)); //-1

        console.log(arr.includes(1)); //true

    //Por favor note que 'indexOf' usa uma igualdade estrita (===) para comparação. Então, se procurarmos por 'false', ele encontra exatamente 'false' e não zero.
    
    //Se quisermos verificar se um 'item' existe no array e não necessita do índice, então '.includes' é preferível.

    //O método '.lastIndexOf' é o mesmo que '.indexOf', mas procura da direita para a esquerda:

        let frutas = ['Maçã', 'Laranja', 'Maçã'];

        console.log(frutas.indexOf('Maçã')); //0 -> (primeiro "Maçã")
        console.log(frutas.lastIndexOf('Maçã')); //2 -> (último "Maçã")


                //O método 'includes' lida corretamente com 'NaN'
                    //Uma característica menor, mas digno de ser notado, do includes é que ele lida corretamente com 'NaN', diferente de 'indexOf':
                        const array = [NaN];

                        console.log(array.indexOf(NaN)); //-1 (errado, deveria ser 0)
                        console.log(array.includes(NaN)); //true (correto)

                    //Isso porque 'includes' foi adicionado ao JavaScript muito depois e usa o algoritmo de comparação mais atualizado internamente.