'use strict';
//Arrow functions, o básico (funções de seta)
    //Há uma outra sintaxe simples e concisa para a criação de funções. É muitas vezes melhor do que Function Expressions. Chama-se "arrow functions" pois parecem como isso:

    let funcao = (arg1, arg2, arg3) => { /* bloco da função */ };

    //Isso cria uma função "funcao" que aceita os argumentos 'arg1' à 'arg3', então avalia a expressão do lado direito, usando-os, e retorna seu resultado.
    //Em outras palavras, é uma versão mais curta de:
    let func = function(arg1, arg2, arg3) {
        return /* expressão */
    }

    //Vamos ver um exemplo concreto:
    let soma = (a, b) => a + b;

    /*  Essa arrow function é uma versão mais curta de:
        let soma = function(a, b) {
            return a + b;
        }  
    */
    console.log(soma(1, 2));

    //Como podemos ver, '(a, b) => a + b' significa uma função que aceita dois argumentos nomeados 'a' e 'b'. Após a execução avalia a expressão 'a + b' e retorna o resultado.
        // - Se temos apenas um argumento, então os parênteses ao redor dos parâmetros podem ser omitidos, a fazendo ainda menor:
        let dobrar = n => n * 2;
        console.log(dobrar(2));
        // - Caso não haja argumentos, os parênteses estão vazios, mas devem estar presentes:
        let dizerOi = () => console.log("Olá!");
        dizerOi();

    //Arrow functions pode não parecer muito familiar ou não muito legível e semântico à primeira vista, mas isso muda rapidamente conforme os olhos se acostumam com a estrutura.
    //São bastante convenientes para ações simples de uma linha (one-line actions), quando estamos com preguiça de escrever muitas palavras.