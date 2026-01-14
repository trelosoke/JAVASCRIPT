'use strict';
//OR (||) - OU
    //O operador "OR" é representado com o símbolo de duas linhas verticais:
    let a = 3, b = 2;
    let result = a || b;

    //Na programação básica, o OR lógico deve manipular apenas valores boolean: se algum dos argumentos foram true, retorna true, senão, retorna false.
    //No JavaScript ele é um pouco mais complexo e poderoso. Mas primeiro, vejamos como se comporta em valores boolean.

    //Essas são as quatro possíveis combinações lógicas:
    console.log(true || true); //true
    console.log(true || false); //true
    console.log(false || true); //true
    console.log(false || false);//Único caso que retorna "false". Esse operador faz com que, caso qualquer um dos operandos sejam true, retorna true.

    //Se um operando não é um boolean, é convertido para tal e após, avaliado:
    if(2 || 0){ //funciona assim como "true || false"
        console.log('E aí.'); //Nesse caso, ambos são tratados como boolean por avaliação.
    }

    //Na maioria das vezes, OR é utilizado em uma declaração "if" para testar se qualquer uma das condições é verdadeira (true):
    let hora = 9;

    if(hora < 10 || hora > 18){ //Se hora < 10 OU hora > 18...
        console.log('Fechado. Volte amanhã.'); //Esse código é executado
    }