'use strict';
//Operador "comma", ou vírgula
    //O operador comma (,) é um dos mais raros e menos usados. Algumas vezes usado para escrever um código menor. 
    //Permite avaliar muitas expressões, dividindo-as com a vírgula. Cada uma é avaliada, mas apenas o valor da última retorna.
    let a = (1 + 2, 3 + 4);
    console.log(a); //7
    
    //A vírgula tem a menor precedência. Ou seja, todos os cálculos são feitos, depois ela age.

    //Ela pode ser útil para colocar mais de uma ação em uma linha dentro de estruturas mais complexas.
    //Por exemplo:
    for(let a = 1, b = 3, c = a * b; a < 10; a++){
        if (a == 1) break;
    };

    //Esse operador está sendo mostrado porque é utilizado em frameworks, mas geralmente não melhora a legibilidade. Deve-se pensar bastante antes de usá-lo.