'use strict';
//And (&&) - E
    //O operador AND é representado por dois "ampersands" (e comerciais) - &&

    let a = true, b = true;
    let result = a && b;

    //Na programação clássica, retorna true se ambos os operandos são truthy e falso, caso contrário:
    console.log(true && true); //Somente esse caso retorna true. Ambos devem ser verdadeiros.
    console.log(false && false); //false
    console.log(true && false); //false
    console.log(false && true); //false

    //Um exemplo com "if":
    let hora = 12;
    let minuto = 30;

    if (hora == 12 && minuto == 30) { //Se hora == 12 E minute == 30...
        console.log('São 12:30'); //isso é executado
    }

    //Assim como OR, qualquer valor é permitido como operando de AND
    if (1 && 0){ //avaliados como true && false
        console.log('Não funciona, pois 0 é "falsy"');
    }