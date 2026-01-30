'use strict';
//Função é um valor
    //Vamos reiterar: não importa como a função é criada, uma função é um valor. Ambos os exemplos do tópico anterior (1 - function expressions) armazenam uma função na variável 'digaOla'.
    //Podemos até exibir esse valor usando console.log ou alert:
    function digaOla() {
        console.log('Olá');
    }

    console.log( digaOla ); //exibe o código da função

    //Por favor note que a última linha não executa a fnunção, pois não há parênteses após 'digaOla'. Há linguagens que qualquer menção ao nome das funções irá executá-la. No JavaScript, não.

    //No JS, uma função é um valor, então podemos lidar com ele como um. O código acima mostra sua representação em string, que é o código-fonte. No node.js (saída), a execução resulta em "[Function: digaOla]". Em navegadores, provavelmente viria a escrita do código inteiro (palavra-chave, identificador e corpo da função).

    //Certamente, uma função é um valor especial, no sentido de que podemos chamá-lo como 'digaOla()'. Mas ainda é um valor. Então podemos trabalhar com ele como com outros tipos de valores.
    //Podemos copiar uma função para outra variável:
    function sayHi() {
        console.log('Hello'); //(1) cria
    }

    let func = sayHi; //(2) copia

    func(); //(3) executa a cópia (funciona)
    sayHi(); //ainda funciona (por que não?)

    //Aqui está o que acontece acima em detalhes:
        // 1. A 'declaration (declaração)' de função (1) cria a função e a coloca dentro da variável nomeada 'sayHi';
        // 2. A linha (2) a copia para dentro da variável 'func'. Por favor note novamente: não há parênteses após 'sayHi'. Se houvesse, func retornaria o resultado da execução de sayHi, e não seria uma cópia dela;
        // 3. Agora a função pode ser chamada por ambos sayHi() e func().

    //Poderíamos também ter usado uma Expressão de Função para declarar sayHi, na primeira linha:
    let sayHi2 = function() { //(1) cria
        console.log('Hello');
    };

    let func2 = sayHi2;

    func2();
    sayHi2();

    //Tudo funcionaria igualmente

                //Por que há um ponto e vírgula ao final?
                    //Você pode estar se perguntando: por que Expressões de Função têm um ponto e vírgula ao final, mas Declarações de Função não?
                    function digaOla() {
                        //...
                    } //sem ponto e vírgula

                    let digaOla = function() {
                        //...
                    }; //com ponto e vírgula
                    
                    //Simples: a função está dentro da declaração (statement) de atribuição. O ponto e vírgula é recomendado ao final da declaração, não sendo parte da sintaxe da função.
                    //O ponto e vírgula ainda estaria lá se fosse 'let digaOla = 5;', por exemplo.