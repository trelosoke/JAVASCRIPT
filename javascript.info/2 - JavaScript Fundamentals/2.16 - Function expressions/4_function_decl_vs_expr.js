'use strict';
//Expressão de Função vs 'Declaration' de Função
    //Vamos formular a diferença chave entre Function Expressions e Function Declarations.

    //Primeiro, a sintaxe: como diferenciá-las no código.
        //Function Declaration: uma função, declarada como uma declaração separada, no fluxo de código principal:
        function soma(a, b) {
            return a + b;
        }

        //Function Expression: uma função, criada dentro de uma expressão ou dentro de outra construção sintática. Aqui, a função é criada no lado direito da expressão de atribuição (=):
        let soma2 = function(a, b) {
            return a + b;
        }

        //A diferença mais sutil é quando uma função é criada pelo motor (engine) do JavaScript

        // ! -- A Function Expression é criada quando quando a execução a alcança e é utilizável apenas a partir daquele momento.

        //Uma vez que o fluxo da execução passa para o lado direito da atribuição 'let soma = function...', lá vamos nós, a função é criada e pode ser usada desse momento em diante (atribuição, chamada, etc);

        // ! -- Declarações de função são diferentes, elas podem ser chamadas ANTES de serem definidas.
        //Por exemplo, uma Declaração de Função global é visível no script inteiro, não importa onde.
        //Isso é por causa de algoritmos internos. Quando o JavaScript se prepara para executar o script, primeiro procura pelas Declarações de Função globais nele e cria as funções. Podemos pensar isso como um "estágio de inicialização".

        //Depois que todas as Declarações de Função são processadas, o código é executado. Então tem acesso a essas funções.
        //Por exemplo, isso funciona:
        digaOla("John");

        function digaOla(name) { //Ela pode ser chamada em qualquer lugar
            console.log(`Olá, ${name}!`);
        }

        //Se fosse uma Expressão de Função, não funcionaria:
        // sayHi("John"); - Não pôde acessar 'sayHi' antes da inicialização

        // let sayHi = function(name) { - (*) Não é mais mágico
        //     console.log(`Olá, ${name}!`);
        // }

        //Function Expression são criadas quando a execução as alcança. Isso aconteceria somente na linha (*). Muito tarde.

        //Outra funcionalidade especial de Declarações de Função é seu escopo de bloco (block scope).
                
    //O que é escopo?
        //Escopo é o "ambiente" ou "contexto" no qual variáveis, funções e declarações podem ser acessadas ou não. Como uma fronteira para definir até onde um nome pode ser alcançado.

        //Temos, por exemplo, o escopo global. Inclui variáveis e funções que não estão dentro de nenhum bloco.
        let nome = 'Treloso'; //Global
        function exibirNome(nome) { //Global
            console.log(nome);
        }
        exibirNome('Treloso');

        //O escopo de função, que define que variáveis definidas na função só existam no mesmo contexto.
        function mostrarMensagem() {
            let mensagem = "Olá, Treloso!"; //não existe fora do ESCOPO da função
            console.log(mensagem);
        }
        //Escopo de bloco (block scope), que faz com que variáveis declaradas com 'let' ou 'const' só existam dentro daquele bloco (em estruturas de controle, como if, for, while...).
        let user = 'treloso'
        if (user == 'treloso') {
            function soma(a, b) { //Só existe no ESCOPO do if
                return a + b;
            }
            let somar = soma(1, 2); //Só existe no ESCOPO do if
            console.log(somar);
        }

        //Sobre esse último exemplo, a partir do ECMAScript 6 (ES6), o modo estrito adicionou 'funções' à equação. Ou seja, funções dentro desses blocos também só existem neles. 
        let idade = 19;
        if (idade < 18) {
            bemvindo(); //executa

            function bemvindo() {
                console.log("Olá!"); //A declaração de função é acessível de qualquer lugar no escopo que está declarada.
            }

            bemvindo(); //executa

        } else  {
            function bemvindo() {
                console.log("Saudações!");
            }
        }
        //A função continua visível de todo o lugar, mas somente dentro do bloco. Ela pode ser chamada em qualquer lugar, desde que esteja no mesmo escopo da qual se encontra.

        //welcome(); não funcionaria

        //Para conseguir utilizar os valores das funções dentro do bloco, basta a atribuirmos para uma variável de escopo mais externo ao que as funções estão, fazendo uma expressão de função:
        let bemvindo;
        let age = 15;
        
        if (age < 18) {
            bemvindo = function() {
                console.log("Olá!");
            }
        } else {
            bemvindo = function() {
                console.log("Saudações!");
            }
        }

        bemvindo(); //funciona - Olá!

        //Ou poderiamos simplificar mais ainda usando o quest mark operator '?':
        let idade2 = 17;
        
        let bemvindo2 = (idade2 < 18) ?
            function() { console.log("Olá!"); } :
            function() { console.log("Saudações!"); };

        bemvindo2(); //Olá!