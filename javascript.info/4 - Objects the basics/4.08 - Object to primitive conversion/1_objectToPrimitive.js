'use strict';
//Conversão de objeto para primitivo
    //O que acontece quando objetos são adicionados (obj1 + obj2), subtraídos (obj1 - obj2) ou printados (exibidos) usando 'alert(obj)'?

    //O JavaScript não lhe permite customizar como operadores funcionam em objetos. Diferente de outras linguagens, como Ruby ou C++, não podemos implementar um método de objeto especial para adição à mão (ou outros operadores).

    //No caso de tais operações, objetos são auto-convertidos para primitivos, e então a operação é realizada sobre esses primitivos e resulta em um valor primitivo.

    //Isso é uma limitação importante: o resultado de 'obj1 + obj2' (ou outra operação matemática) não pode ser um outro objeto!

    //Por exemplo, não podemos fazer objetos representando vetores ou matrizes, adicioná-los e esperar um objeto "somado" como resultado. Tais feitos de arquitetura estão automaticamente "fora do tabuleiro".

    //Logo, porque não podemos tecnicamente fazer muito aqui, não há cálculos com objetos em projetos reais. Quando acontece, com raras excessões, é por causa de um erro de código.


    //Nesse capítulo iremos abordar como um objeto é convertido para primitivo e como customizar isso.

    //Temos dois propósitos:
        //1. Irá nos permitir entender o que está acontecendo em casos de erros de código, quando tal operação acontece acidentalmente.

        //2. Há excessões, quando essas operações são possíveis e ficam boas. P.ex. subtraindo ou comparando datas (objetos 'Date'). Nós as encontraremos mais tarde, em outro tópico (Date and time).