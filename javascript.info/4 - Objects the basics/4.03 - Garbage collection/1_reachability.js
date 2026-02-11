'use strict';
//Reachability (alcance, acessibilidade)
    //O conceito principal do gerenciamento da memória no JavaScript é a "reachability (acessibilidade)". 

    //Simplificando, valores "reachable (acessíveis)" são aqueles que são acessíveis ou utilizáveis de alguma forma. É garantido que esses valores estarão armazenados na memória.

    // 1. Há um conjunto básico de valores intrinsecamente (que é de sua natureza) alcançáveis, que não podem ser deletados por razões óbvias:
        // - A função executada atualmente, suas variáveis locais e parâmetros.
        // - Outras funções na cadeia de chamadas aninhadas atual, suas variáveis locais e parâmetros.
        // - Variáveis locais;
        // - (há também alguns outros, internos da linguagem)

        //Esses valores são chamados 'roots'.
        
    // 2. Qualquer outro valor é considerado alcançável se for acessível através do 'root' por uma referência ou cadeia de referências.
        //Por exemplo, se há um objeto em uma variável global, e esse objeto tem uma propriedade referenciando outro objeto, aquele objeto é considerado 'reachable'. E aqueles os quais ele faz referência também. Exemplos detalhados a seguir.


    //Há um processo por trás na engine do JavaScript chamado "garbage collection (coleta de lixo)". Ele monitora todos os objetos e remove aqueles que se tornaram "unreachable (inalcançáveis)".

//Um exemplo simples
    //Exemplo mais simples:
    let user = {    //user tem uma referência para o objeto
        name: 'John',
    };

    //Aqui temos uma variável global 'user' que faz referência a um objeto '{name: 'John}' (podemos chamar só de John, para poupar tempo). A propriedade 'name' de John armazena um primitivo (string), então esse valor é desenhado dentro do objeto.

    //Se o valor de 'user' for sobrescrito, a referência é perdida>
    user = null;
    //Agora o objeto John (antes armazenado na variável 'user') torna-se 'unreachable'. Não há maneiras de acessá-lo, não há referências a ele. O 'garbage collector' jogará fora os dados e liberar a memória.

//Duas referências
    //Agora vamos imaginar que copiamos a referência de 'user' para 'admin':
    user = {
        name: 'John',
    };
    
    let admin = user;

    //Caso sobrescrevamos apenas uma das duas referências, o objeto continuará 'reachable'.
    user = null;
    console.log(user);
    console.log(admin); //Objeto presente

    //Ou seja, enquanto houver referências a um objeto, a memória ainda o guardará.