'use strict';
//Operador interrogação (question mark) '?'
    //Algumas vezes, precisamos atribuir uma variável dependendo de uma condição:
    let acessPerm;
    let idade = 18;

    if(idade >= 18){
        acessPerm = true;
    } else {
        acessPerm = false;
    }

    console.log(acessPerm);

    //O operador '?' permite-nos fazer isso de uma forma mais curta. Algumas vezes é chamado de operador "ternário" porque possui três operandos (o único que têm isso tudo no JavaScript).

    //A sintaxe é:
    let accessAllowed = (idade > 18) ? true : false;

    //Também podemos omitir os parênteses, já que o ? tem uma precedência muito baixa (executa após ">"), mas é deixado para melhor legibilidade (recomendado).
    //let accessAllowed = idade > 18 ? true : false;