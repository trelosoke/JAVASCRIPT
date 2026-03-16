'use strict';
//Regras de conversão
    //No capítulo "Type Conversions" nós vimos as regras para conversões numéricas, de string e de booleanos de primitivos. Mas deixamos uma lacuna para os objetos. Agora, como sabemos sobre métodos e 'symbols' é possível preenchê-la.
        //1. Não há conversão para boolean. Todos os objetos são 'true' em um contexto boolean, simples assim. Há apenas conversões numéricas e de string.

        //2. A conversão numérica acontece quando subtraímos objetos ou aplicamos funções matemáticas. Por exemplo, objetos 'Date' (que estarão no capítulo 'Date and time') pode ser subtraído, e o resultado de 'date1 - date2' é a diferença de tempo entre as duas datas.

        //3. Quando à conversão para string, normalmente acontece quando exibimos (output) um objeto com 'alert(obj)' e em contextos similares.

        //Podemos implementar conversão numérica ou de string por nós mesmos, utilizando de métodos de objeto especiais.

        //Agora vamos adentrar nos detalhes técnicos, pois é a única maneira de cobrir o tópico com profundidade.