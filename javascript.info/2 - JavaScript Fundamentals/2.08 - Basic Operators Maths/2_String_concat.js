'use strict';
//Concatenação de string com o "+" binário
        //comentário
          //Concatenar é: ligar(-se), juntar(-se) numa cadeia ou sequência lógica ou orgânica
    
    //Além de somar no tipo Number, o sinal + também serve como concatenação em strings, ou seja, as une:
    let s = "my" + "string";
    console.log(s);

    //Caso qualquer um dos operandos é uma string, os tipos em seguida são convertidos para tal:
    console.log('1' + 2); //12, não 3
    console.log(2 + '1'); //21 não 3
    
    //Mas o "+" não deveria converter para número?
        //O "+", ao se deparar com o tipo "string" age como concatenação e converte todos, a partir do momento que entra string na operação, da esquerda para a direita, como string também.
        console.log('2' + 3 + 6); //236, não 11
        console.log(1 + 2 + '7'); //37, não 10. Nesse caso em particular, como a string ainda não tinha aparecido, os números se somam antes dela aparecer

            //No caso dos outros operadores, eles não têm essa propriedade com strings, logo, convertem sempre para número:
            console.log(1 - '3'); //-2
            console.log('4' / '2'); //2