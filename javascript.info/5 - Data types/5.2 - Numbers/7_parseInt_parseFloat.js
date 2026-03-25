'use strict';
//'parseInt' e 'parseFloat'
    //Conversão numérica utilizando o "+" unário ou 'Number()' é estrita. Se o valor não é exatamente um número, ela falha:
        console.log(+"100px"); //NaN

    //A única excessão são os espaços ao começo ou final de uma string, pois são ignorados.

    //Mas na vida real, frequentemente temos valores em unidades, como "100px" ou "12pt" e "1.5em" em CSS. Também em muitos países, o símbolo da moeda vai depois da quantia, então temos "19€" e queremos extrair um valor numérico disso.

    //É para isso que servem 'parseInt' e 'parseFloat'.

    //Eles "leem" um número de uma string até eles não conseguirem mais. No caso de um erro, o número coletado é retornado. A função 'parseInt' retorna um inteiro, enquanto o 'parseFloat' retornará um número "ponto flutuante" (como um decimal, mas aqui usa-se o ponto):
                //Ponto flutuante
                    //0.1, 0.5, etc. são pontos flutuantes, pois na memória esses números podem mudar a posição do ponto: 0.005, 0.00005. Eles não são fixos. Recomendo dar uma pequena olhada em explicações de pontos flutuantes, caso reste dúvida. 
                    // (PONTO PARA DAR UMA EXPLICAÇÃO MELHOR, QUANDO APRENDER BITS NA MÁQUINA, COMO MANTISSA, ETC.)

        console.log(parseInt("100px", 10)); //100
        console.log(parseFloat("12.5em")); //12.5

        console.log(parseInt("12.3")); //12, apenas a parte inteira é retornada
        console.log(parseFloat("12.3.4")); //12.3, o segundo ponto para a leitura

    //Há situações que 'parseInt/parseFloat' retornarão NaN. Acontece quando nenhum dígito pôde ser lido:
        console.log(parseInt("a123")); //NaN, o primeiro símbolo para o processo

                //O segundo argumento de 'parseInt(str, radix)
                    //A função 'parseInt()' tem um parâmetro secundário opcional. Ele especifica a base do sistema numérico, para que 'parseInt' também possa analisar string de números hexadecimais, números binários e por aí vai:
                        console.log(parseInt("0xff", 16)); //255
                        console.log(parseInt('ff', 16)); //255, sem o 0x também funciona

                        console.log(parseInt('2n9c', 36)); //123456