'use strict';
//Métodos 'pop/push', 'shift/unshift'
    //Uma "fila(queue)" é um dos usos mais comuns de um array. Na ciência da computação, isso significa uma coleção ordenada de entidades que suportam duas operações:
        // - 'push' adiciona um elemento ao final;
        // - 'shift' obtém um elemento do início, avançando a fila, para que o 2º elemento se torne o 1ª e assim por diante.
            //First-In-First-Out (FIFO)
    //Arrays suportam ambas as operações.
    //Na prática precisamos disso frequentemente. Por exemplo, uma fila de mensagens que precisam ser exibidas na tela.

    //Há outro caso de uso para arrays: a estrutura de dados chamada "stack (pilha)".
    //Suporta duas operações:
        // - 'push' adiciona um elemento ao final;
        // - 'pop' remove o último elemento adicionado.

    //Então novos elementos são adicionados ou retirados do "final".

    //Uma pilha (stack) é normalmente ilustrada como um baralho de cartas: novas cartas são adicionadas no topo ou retiradas do topo.

    //Para stacks, o último elemento adicionado é recebido primeiro, que também é chamado de princípio LIFO (Last-In-First-Out/Último-Dentro-Primeiro-Fora). Ou seja, o primeiro a ser adicionado é o primeiro que será retirado.

    //Arrays no JavaScript podem funcionar tanto como fila(queue) quanto como pilha(stack). Eles permitem que você adicione/remova elementos, ambos de/para o começo ou final.

    //Na ciência da computação, a estrutura de dados que permite isso é chamada "deque" ou "Double-ended queue", que envolve ambos os queues e stacks.

//Métodos que funcionam com o final do array:
    //pop
        //Extrai o último elemento do array e o retorna:
            let frutas = ["Maçã", "Laranja", "Ameixa"];

            console.log(frutas.pop()); //Remove "Ameixa" e o retorna

            console.log(frutas); //[ 'Maçã', 'Laranja' ]

        //Ambos 'frutas.at(-1)' e 'frutas.pop()' retornam o último elemento do array, mas 'frutas.pop()' também modifica o array removendo esse elemento.

    //push
        //Adiciona o elemento ao final do array:
            frutas = ["Maçã", "Laranja"];

            frutas.push("Ameixa");

            console.log(frutas); //[ 'Maçã', 'Laranja', 'Ameixa' ]

        //A chamada 'frutas.push(...)' é igual a 'frutas[frutas.length] = ...'

//Métodos que funcionam com o início do array:
    //shift
        //Extrai o primeiro elemento do array e o retorna:
            frutas = ["Maçã", "Laranja", "Ameixa"];

            console.log(frutas.shift()); //Remove "Maçã" e o retorna

            console.log(frutas); //[ 'Laranja', 'Ameixa' ]

    //unshift
        //Adiciona o elemento no começo do array:
            frutas = [ 'Laranja', 'Ameixa' ];

            frutas.unshift("Maçã");

            console.log(frutas); //[ 'Maçã', 'Laranja', 'Ameixa' ]

//Os métodos 'push' e 'unshift' podem adicionar múltiplos elementos de uma vez:
    frutas = ["Maçã"];

    frutas.push("Laranja, Pêssego");
    frutas.unshift("Abacaxi, Limão");

    console.log(frutas); //[ 'Abacaxi, Limão', 'Maçã', 'Laranja, Pêssego' ]