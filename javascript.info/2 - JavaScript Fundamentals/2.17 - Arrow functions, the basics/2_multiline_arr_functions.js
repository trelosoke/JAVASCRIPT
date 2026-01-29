'use strict';
//Arrow functions multilinhas
    //As arrow functions que vimos até agora foram bem simples. Elas pegam argumentos presentes na esquerda de =>, os avaliam e retornam a expressão do lado esquerdo com eles.

    //ALgumas vezes precisamos de uma função mais complexa, com múltiplas expressões e declarações. Nesse caso, podemos envolvê-las com chaves '{}'. A principal diferença é que chaves necessitam de um 'return' dentro delas para retornar um valor (assim como uma função normal):
    let soma = (a, b) => { //as chaves abrem uma função multilinha
        let result = a + b;
        return result; //se usarmos as chaves, precisamos de um 'return' explícito
    };

    console.log(soma(1, 2)); //3

        //Mais para vir
            //Aqui contemplamos arrow functions brevemente. Mas isso não é tudo!
            //Arrow functions têm outras funcionalidades interessantes.

            //Para estudá-las profundamente, precisamos primeiramente conhecer alguns outros aspectos do JavaScript. Então, retornamos para arrow functions em um capítulo futuro.
            
            //Por agora, já podemos utilizá-las para ações de uma linha e callbacks.