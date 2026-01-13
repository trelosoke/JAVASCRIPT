'use strict'
//A declaração "if" avalia a expressão nos parênteses e converte o valor para boolean.

//Relembrando "Type Conversions":
    // - Um número "0", uma string vazia "", null, undefined e NaN, todos se tornam "false". Por isso, são chamados de valores "falsy".
    // - Outros valores se tornam "true", então chamados de "truthy".

    //Logo, um código sobre essa condição nunca irá executar:
    if (0){ //0 é "falsy"
        //...
    }

    //...e dentro dessa condição, sempre vai:
    if(1){ //1 é "truthy"
        //...
    }

    //Podemos até passar um valor boolean pré-avalidado para "if", como esse:
    let year = 2026;
    let cond = (year == 2026);

    if(cond){
        //...
    }