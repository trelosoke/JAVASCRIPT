'use strict';
//Aspas (quotes)
    //Vamos revisitar os tipos de aspas.
    //Strings podem ser delimitadas por aspas simples, aspas duplas ou acentos graves (``).
        let simples = 'aspas-simples';
        let duplas = "aspas-duplas";

        let grave = `acento-grave`;

    //Aspas simples e duplas são essenciamente a mesma coisa. Acentos graves, no entanto, nos permite incorporar qualquer expressão dentro da string envolvendo-a em ${}:

        function soma(a, b) {
            return a + b;
        }

        console.log(`1 + 2 = ${soma(1, 2)}`); //1 + 2 = 3

    //Outra vantagem de usar acentos graves é que eles permitem que uma string se extenda por várias linhas:
        let guestList = `Convidados: * John
            * Pete
            * Mary
        `;

        console.log(guestList); //retorna a lista em múltiplas linhas

    //Parece natural, certo? Mas aspas simples ou duplas não funcionam dessa forma.

    //Se as usarmos e tentarmos usar multiplas linhas, haverá um erro:
        /* 
        let listaDeConvidados = "Guests: 
            * John"; ---> SyntaxError: Invalid or unexpected token 
        */

    //Aspas simples e duplas vêm de tempos antigos da criação da linguagem, quando a necessidade de múltiplas strings não era levada em considaração.

    //Acentos graves também nos permitem especificar uma "função modelo (template function)" antes do primeiro acento. A sintaxe é: func`string`. 
    //A função 'func' é chamada automaticamente, recebe a string e as expressões incorporadas e pode processá-las.
    //Essa funcionalidade é chamada "tagged tamplates (modelos marcados)". É raramente visto, mas você pode ler mais sobre no MDN: Tamplate literals(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).