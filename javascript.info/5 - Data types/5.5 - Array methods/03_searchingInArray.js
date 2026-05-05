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

//'find' e 'findIndex/findLastIndex'
    //Imagine que temos um array de objetos. Como encontramos um objeto com uma condição específica?

    //Aqui o método '.find(função)' chega. A sintaxe é:

        let resultado = arr.find(function(item, índice, array) {
            //se 'true' é retornado, 'item' é retornado e a iteração para
            //para um cenário 'falsy', retorna 'undefined'
        });

    //A função é chamada para elementos do array, um após o outro:
        // - 'item' é o elemento;
        // - 'índice' é o índice;
        // - 'array' é o array em si.

    //Se retorna 'true' a pesquisa é interrompida, o 'item' é retornado. Se nada é encontrado, 'undefined' é retornado.
    
    //Por exemplo, temos um array de usuários, cada um com os campos 'id' e 'name'. Vamos encontrar o com 'id == 1':

        let users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"},
        ];

        let user1 = users.find(item => item.id === 1);

        console.log(user1.name);

    //Na vida real, arrays de objetos são algo comum, então o método 'find' é bem útil.

    //Note que no exemplo nós fornecemos para 'find' a função 'item => item.id == 1' com um argumento. Isso é típico, outros argumentos dessa função são raramente utilizados

    //O método '.findIndex' tem a mesma sintaxe, mas retorna o índice onde o elemento foi encontrado ao invés dele em si. O valor -1 é retornado caso nada for encontrado.

    //O método '.findLastIndex' é como 'findIndex', mas procura da direita para a esquerda, semelhante a 'lastIndexOf'.

    //Aqui está um exemplo:
        
        users = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"},
            {id: 4, name: "John"},
        ];

        //encontra o índice do primeiro John
        console.log(users.findIndex(item => item.name === "John")); //0

        //encontra o índice do último John
        console.log(users.findLastIndex(item => item.name === "John")); //3