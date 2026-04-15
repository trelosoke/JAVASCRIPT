'use strict';
//Performance
    //Os métodos 'push/pop' rodam rapidamente, enquanto 'shift/unshift' são lentos.

    //Por que é mais rápido trabalhar com o final de um array do que seu início? Vamos ver o que acontece durante a execução:

        //frutas.shift(); --> obtém um elemento do começo.

        //Não é o suficiente obter o número de índice 0. Os outros elementos têm que ser reinumerados também.

    //A operação 'shift' deve fazer 3 coisas:
        // 1. Remover o elemento com o índice 0.
        // 2. Mover todos os elementos para a esquerda, reinumerando-os do índice 1 para o 0, o 2 para o 1 e por aí vai.
        // 3. Atualizar a propriedade 'length'.

        let frutas = ["Banana", "Uva", "Manga"]; 

        /* 
         * Banana == frutas[0]
         * Uva == frutas[1]
         * Manga == frutas [2]
         * 
         * frutas.length == 3
         * 
         */

        frutas.shift(); //[ 'Uva', 'Manga' ]

        /* 
         * Banana retirada
         * Uva != frutas[1] e Uva == frutas[0]
         * Manga != frutas[2] e Manga == frutas[1]
         * 
         * frutas.length == 2
         * 
         */

    //Quanto mais elementos nesse array, mais tempo leva para movê-los, mais operações na memória.

    //De forma similar, acontece com 'unshift': para adicionar um elemento no início do array, precisamos mover primeiro todos os elementos existentes para a direita, aumentando seus índices.

    //Já 'pop' e 'push' não movem nada. Para extrair um elemento do final, o método 'pop' limpa o índice e diminui o 'length'.

    //As ações para a operação 'pop':
        frutas = ["Banana", "Uva", "Manga"];

        /* 
         * Banana == frutas[0]
         * Uva == frutas[1]
         * Manga == frutas [2]
         * 
         * frutas.length == 3
         * 
         */

        frutas.pop();

        /* 
         * Banana == frutas[0]
         * Uva == frutas[1]
         * 
         * frutas.length == 2
         * 
         */

    //O método 'pop' não precisa mover nada, pois os outros elementos mantém seus índices. Por isso é bem mais rápido.

    //De forma similar, acontece com o método 'push'.