//📖 Perguntas sobre os tópicos 2.1–2.17
// 2.1 Hello, world!
    // Como podemos incluir código JavaScript em uma página HTML?
        //Usando, dentro do HTML, uma tag "script" com o atributo "src" contendo o local do script.
    // Qual a diferença entre colocar o <script> no <head> e no final do <body>?
        //Com o script no head, o script é baixado na página antes mesmo de carregar seu conteúdo. Então pode dar alguns erros se o JS tenta acessar conteúdos que ainda não podem ser acessados. Já no final do body, é garantido o carregamento total da página antes do JS ser executado, garantindo que o script poderá acessar todos os elementos da página.

// 2.2 Code structure
    // Por que usamos ponto e vírgula em instruções JavaScript?
        //Pois garante que uma declaração acabou e que o controle agora passa-se ao próximo comando. 
    // Qual a diferença entre comentários de linha única e de múltiplas linhas?
        //Os comentários de linha única permitem somente comentar em uma linha só. Os de múltiplas linha em várias linhas ao mesmo tempo.
    // Como a indentação ajuda na legibilidade do código?
        //Permitindo visualizar a hierarquia do código, ou seja, o que está submetido a quê.

// 2.3 The modern mode, "use strict"
    // O que acontece quando ativamos "use strict" em um script?
        //Todo o código fica na sintaxe e nas funcionalidades mais modernas do JavaScript.
    // Por que o modo estrito é considerado uma boa prática?
        //Pois o JS moderno é o mais utilizado atualmente.

// 2.4 Variables
    // Qual a diferença entre let, const e var?
        //Let declara uma variável qualquer, const é uma constante, uma variável que não muda seu valor e var também declara variáveis, mas é pouco utilizado e má prática.
    // Por que devemos evitar usar var em código moderno?
        //Ainda não foi explicado no curso. Será visto em estudo avançado com função.
    // O que acontece se tentarmos alterar o valor de uma variável declarada com const?
        //Dará um erro de "atribuição a uma variável constante(const)"

// 2.5 Data types
    // Quais são os tipos primitivos em JavaScript?
        //Number, string, BigInt, null, undefined e boolean.

    // Qual a diferença entre null e undefined?
        //Null indica valores vazios e desconhecidos. Undefined indica valores que não foram definidos, não tiveram atribuição, como uma variável.

    // O que é o tipo symbol e para que pode ser usado?
        //É um complemento do tipo object e pode ser usado para nomear os objetos. O aprofundamento de seu funcionamento será posto em outro capítulo.
    // Qual a diferença entre valores primitivos e objetos?
        //Os valores primitivos permitem o armazenamento de apenas um tipo de dado. Já os objetos permitem o armazenamento de uma coleção de dados de tipos diferentes e trabalha com entidades mais complexas.

// 2.6 Interaction: alert, prompt, confirm
    // Para que serve a função alert?
        //Para mostrar uma janela de texto no navegador. Janela que o visual é determinado somente pelo navegador. 
    // Qual a diferença entre prompt e confirm?
        //Prompt pede para digitar algum texto e confirmar ou cancelar. O confirme pede somente para confirmar ou cancelar.
    // O que acontece se o usuário clicar em “Cancelar” em um prompt?
        //O prompt retorna "null".

// 2.7 Type Conversions
    // Como converter uma string para número em JavaScript?
        //Utilizando "Number(string)" ou o sinal de soma unário (+) antes da string.
    // O que acontece se tentarmos converter uma string não numérica com Number()?
        //Retorna o valor "NaN *Not a Number".
    // Como o operador + se comporta quando usado com strings e números juntos?
        //Assim que aparece uma string no meio de vários números, o + de adição começa a concatenar com os numbers após a string, os transformando em strings também.

// 2.8 Basic operators, maths
    // Quais operadores aritméticos existem em JavaScript?
        //Os comuns da matemárica (+, -, *, /, **) e o Reminder (%) que remete ao resto de uma divisão.
    // Qual operador usamos para calcular potência?
        //O operador "**"
    // Qual a diferença entre ++contador e contador++?
        //Na incrementação, ao colocar os operadores antes da variável, ela é adicionada primeiro e depois seu valor é mostrado. Já quando é colocada depois, o valor anterior da incrementação aparece e depois seu valor é adicionado por 1.
    // Para que servem os operadores de atribuição como += e -=?
        //São úteis para encurtar um cálculo que usa a própria variável como operando.

// 2.9 Comparisons
    // Qual a diferença entre == e ===?
        //O "==" tenta comparar igualdade somente pelo valor. Já o "===" iguala por valor e tipo. É mais estrito.
    // O que acontece ao comparar null com undefined?
        //Retorna true (==). É o único caso em que se retorna true com esses dois.
    // Como funciona a comparação de strings em JavaScript?
        //É checado de acordo com o número do unicode da palavra/letra/símbolo. Então, caso compare-se "A > a", está incorreto, pois as letras minúsculas têm um número unicode maior que as maiúsculas.
// 2.10 Conditional branching: if, '?'
    // Como funciona a estrutura if...else?
        //É adicionado uma condição para um código rodar e, caso contrário, ou seja, se a condição for falsa, passa o controle para o próximo comando, que pode ser o else. O else, por sua vez, é executado caso o código anterior da repartição if tiver condição falsa, podendo ou não colocar outra condição (else if(condição)).
    // Qual a vantagem de usar o operador ternário ? : em vez de if...else?
        //A praticidade quando se trata de códigos pequenos, principalmente se houver apenas uma condição.

// 2.11 Logical operators
    // Como funciona o operador || (OR)?
        //O OR (||) analisa todos os termos o qual está trabalhando e caso algum for true, ele o retorna e ignora o restante.
    // Como funciona o operador && (AND)?
        //O AND (&&) analisa todos os termos o qual está trabalhando e caso algum for false, ele o retorna e ignora o restante.
    // O que significa avaliação de curto-circuito em operadores lógicos?
        //É um modo de usá-los para encurtar um código condicional. Ele já retorna ou um ou outro, ou retorna um e outro.
    // Para que serve o operador ! (NOT)?
        //Para utilizar o valor contrário de algum comando ou declaração e também pode servir para conversão para boolean.

// 2.12 Nullish coalescing operator '??'
    // Qual a diferença entre || e ???
        //O OR(||) considera todos os valores falsy quando está analisando. Então, além de null e undefined, 0, string vazia e false também são valores falsy. Já o NCO(??) considera falso somente null e undefined.
    // Em que situação o operador ?? é mais adequado que ||?
        //Quando é necessário considerar somente null e undefined valores falsos.

// 2.13 Loops: while and for
    // Qual a diferença entre while e do...while?
        //No while, o loop é executado direto, já condicionado. Já no do...while, primeiro há uma ação qualquer que é executada, depois a condição do loop começa a constar.
    // Como funciona a estrutura for em JavaScript?
        //Ela pede um valor de variável, uma condição e, após isso, executa o bloco de código. Depois executá-lo, a variável é incrementada.
    // Para que servem as instruções break e continue dentro de loops?
        //Break serve para interromper o loop, sair dele. Continue serve para pular para a próxima iteração;

// 2.14 The "switch" statement
    // Em que situações o switch é mais útil que vários if...else?
        //Quando necessita-se de várias condições para uma única variável.
    // O que acontece se esquecermos o break dentro de um switch?
        //Todos os códigos de case serão executados.
    // Para que serve a cláusula default em um switch?
        //Executa caso todos os "case" forem false. Como se fosse um else genérico.

// 2.15 Functions
    // Como declarar uma função em JavaScript?
        //Utilizando "function", seguido de uma identificação (um nome) e, entre parênteses, os parâmetros utilizados (ou sem parâmetros), seguidos de chaves, onde está o bloco da função.
    // Qual a diferença entre parâmetros e argumentos de uma função?
        //Os parâmetros são variáveis da funções nos quais os argumentos vão. Argumentos são os valores definidos desses parâmetros.
    // Por que funções são consideradas blocos reutilizáveis de código?
        //Pois podem ser utilizadas em vários lugares do código referenciando um só lugar, que é uma única function.

// 2.16 Function expressions
    // Qual a diferença entre function declaration e function expression?
        //A declaration começa com function e a sua identificação + parâmetros. Já a expression é criada em uma variável/dentro de uma expressão, sendo chamada de função anônima, pois recebe o nome da variável.
    // Como podemos armazenar uma função em uma variável?
        //Através da atribuição (=) com a function:
        let func = function() {
            console.log("Function expression");
        };
    // Em que situações uma function expression é mais útil que uma function declaration?
        //Ela é mais útil em callbacks, funções anônimas, funções armazenadas em variáveis, entre outras utilizades.

// 2.17 Arrow functions, the basics
    // Qual a sintaxe básica de uma arrow function?
        //() => {}, sendo '()' os parâmetros, '=>' a indicação de função e '{}' o bloco da função
    // O que significa retorno implícito em uma arrow function?
        //É o fato de não ser necessário o uso do "return" quando for retornar algum valor em situações de uma única linha:
        (a, b) => a + b;
    // Em que situações as arrow functions são mais vantajosas que funções tradicionais?
        //São úteis para encurtar a forma das funções comuns, principalmente em ambientes de cálculos menores e menos complexos.
