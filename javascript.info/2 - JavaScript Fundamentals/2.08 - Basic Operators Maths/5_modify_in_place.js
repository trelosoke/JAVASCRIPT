'use strict';
//Modificação no lugar
    //Frequentemente precisamos aplicar um operador a uma variável e armazenar o mesmo resultado na mesma variável:
    /*
    let n = 2;
    n = n + 5;
    n = n * 2;
    */

    //Essa notação pode ser encurtada usando os operadores "+=" e "*=":
    let n = 2;
    n += 5; //O mesmo que n = n + 5
    n *= 2; //O mesmo que n = n * 2
    console.log(n); //14

    //Esse tipo de operador existe para todos os aritméticos e bitwise: /=, -=, etc.
    //Têm a mesma precedência de uma atribuição (=) normal. Logo, rodam depois de todos os cálculos.
    let n1 = 2;

    n1 *= 3 + 5; //3 + 5 é calculado primeiro, depois n1 * 8. O mesmo que n1 *= 8.
    console.log(n1); //16