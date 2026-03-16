'use strict';
//Conversões adicionais
    //Como já sabemos, muitos operadores e funções performam conversões de tipo, p.ex. multiplicação '*' converte operando para números.

    //Se passarmos um objeto como argumento, então há dois estágios de cálculo:
        //1. O objeto é convertido para um primitivo (utilizando as regras descritas acima).
        //2. Se necessário para cálculos adicionais, o primitivo resultante também é convertido.

    //Por exemplo:
    let obj = {
        //toString lida com todas as conversão na ausência dos outros métodos
        toString() {
            return "2";
        },
    };

    console.log(obj * 2); //4, objeto convertido para primitivo "2", e então a multiplicação o fez número
    
        //1. A multiplicação 'obj * 2' primeiro converte o objeto para um primitivo (a string "2")
        //2. Então "2" * 2 torna-se '2 * 2' (a string é convertida para número).


    //O "+" binário irá concatenar string na mesma situação, já que ele aceita prontamente uma string:
    let obj2 = {
        toString() {
            return "2";
        },
    };

    console.log(obj + 2); //"22" ("2" + 2), conversão de um primitivo retornou uma string -> concatenação