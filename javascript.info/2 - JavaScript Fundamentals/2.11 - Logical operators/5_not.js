'use strict';
//NOT (!) - NÃO
    //O operador "NOT" booleano é representado pelo ponto de exclamação (!).
    
    //A sintaxe é bem simples:
    let value = 1;
    let result = !value;

    //O operador aceita um único argumento e faz o seguinte:
        // 1. Converte o operando para o tipo boolean: true/false;
        // 2. Retorna o valor inverso.

        //Por exemplo:
        console.log(!true); //false
        console.log(!0); //true

    //Usar "!!" transforma qualquer valor em boolean. O mesmo que "Boolean()".
    console.log(!!0) //true - transforma em boolean, inverte, mas inverte novamente, voltando ao valor boolean original.
    console.log(!!'string não vazia'); //true
    console.log(!!null) //false

    //Usando uma função "build-in" boolean:
    console.log(Boolean(0));
    console.log(Boolean('string não vazia'));
    console.log(Boolean(Null));

    //O NOT tem a maior precedência dentre os operadores lógicos. Sempre será calculado antes de "&&" e "||".