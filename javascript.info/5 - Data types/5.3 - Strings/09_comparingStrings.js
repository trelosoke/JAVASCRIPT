'use strict';
//Comparando strings
    //Como sabemos do capítulo "Comparações", strings são comparadas caractere-por-caractere na ordem alfabética.
    //No entanto, existem algumas esquisitisses:
        // 1. Uma letra em caixa baixa (lowercase) é sempre maior que uma em caixa alta (uppercase):
            console.log('a' > 'Z'); //true
        
        // 2. Letras com sinais gráficos estão "fora de ordem":
            console.log('Água' > 'Zebra'); //true

        //Isso pode levar a resultados estranhos se ordenarmos esses nomes. Normalmente as pessoas esperariam "Zebra" vir depois de "Água" na lista.

    //Para entender o que acontece, devemos estar cientes que strings no JavaScript são codificadas usando "UTF-16" (como já foi mencionado). Ou seja, cada caractere corresponde a um código numérico.

    //Os seguintes são métodos especiais que permitem obter o caractere para o código e vice-versa:
        //str.codePointAt(posição)
            //Retorna um número decimal representando o código para o caractere na posição 'posição':
                //capitalizações diferentes têm códigos diferentes
                console.log("Z".codePointAt(0)); //90
                console.log("z".codePointAt(0)); //122
                console.log("z".codePointAt(0).toString(16)); //7a, caso precisemos de uma representação em hexadecimal

        //String.fromCodePoint(code)
            //Cria um caractere pelo seu código numérico:
                console.log(String.fromCodePoint(90)); //"Z"
                console.log(String.fromCodePoint(0x7a)) //"z" (também podemos colocar sua representação em hexadecimal)

            //Agora vamos ver os caracteres com os códigos entre 65 e 220 (o alfabeto latino e um pouco mais) fazendo uma string deles

            let str = '';

            for (let i = 65; i <= 220; i++) {
                str += String.fromCodePoint(i);
            }

            console.log(str);

        //Vê? As letras maiúsculas vão primeiro, então algumas especiais, então as minúsculas e Ö próximo ao final da exibição.

        //Agora se torna porque 'a' > 'Z'

        //Os caracteres são comparados por seus códigos numéricos. O código ser de número maior significa que o caractere é maior. O código para 'a'(97) é maior que o código para 'Z'(90).
            // - todas as letras minúsculas vão depois das maiúsculas pois seus códigos são maiores;
            // - algumas letras como Ö ficam separadas do alfabeto principal. Aqui, seu código é maior que qualquer coisa de 'a' à 'z'.

    //Comparações corretas
        //O algoritmo "correto" para fazer comparações de string é mais complexo de que parece, pois alfabetos são diferentes para diferentes linguagens.
        //Então, o navegador precisa saber o idioma para comparar.

        //Felizmente, navegadores modernos suportam o padrão internacionalizador "ECMA-402".

        //Ele provê um método especial para comparar strings em diferentes idiomas, seguindo suas regras.

        //A chamada 'str.locateCompare(str2)' retorna um inteiro indicando se 'str' é menor, igual ou maior que 'str2' de acordo com as regras do idioma:
            // - Retorna um número negativo se 'str' é menor que 'str2'.
            // - Retorna um número positivo se 'str' é maior que 'str2'.
            // - Retorna 0 se ambos são equivalentes

        //Por exemplo:
            console.log('Água'.localeCompare('Zebra')); //-1, "Água" é menor que "Zebra"

        //Esse método, na verdade, tem dois argumentos adicionais especificados na documentação (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare), os quais o permitem especificar o idioma (por padrão extraído do ambiente, a ordem das letras depende do idioma) e configurar regar adicionais como sensibilidade de capitalização ou se "a" e "á" deveriam ser tratados igualmente, etc.