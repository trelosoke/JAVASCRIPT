'use strict';
//Números
    let num = 123;
    num = 12.345; //No JS, os número decimais são separados por pontos, não vírgulas

    //O tipo "número" representa tanto números inteiros quanto decimais (chamados de floating point numbers).

    //Há muitas operações que podem ser realizadas, como multiplicação "*", divisão "/", soma "+", subtração "-" e por aí vai.

    //Além dor números comuns, há os chamados "valores numéricos especiais" (special numeric values) que tambpem pertencem à esse tipo de dado: Infinity, -Infinity e NaN (Not a Number).

        //Infinity
        //Podemos conseguir isso ao fazer uma divisão por zero ou só o referenciando diretamente:
        console.log(1/0);
        console.log(Infinity);

        //NaN
        //Representa um erro computacional. É o resultado de uma operação matemática incorreta ou indefinida. Por exemplo:
        console.log('not a number' / 2); //Resulta NaN

        //Qualquer operação que contenha NaN em algum lugar, não importa onde, resulta em NaN:
        console.log(3 + 10 - 5 / NaN);
        console.log(2 + NaN + 3);
        //A única excessão é na operação abaixo:
        console.log(NaN ** 0 == 1); //Retorna verdadeiro (true). '**' significa "elevado a".

            //comentário
            //Operações matemáticas no JS são seguras. Dividir por zero não vai crashar o seu IDE ou computador. No máximo, resulta em Infinity ou NaN.