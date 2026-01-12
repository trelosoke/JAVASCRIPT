'use strict';
//Conversão numérica, "+" unário
    //O "+" unário não tem efeito em números, mas faz o mesmo que Number(valor), porém, mais curto.
    let x = 1;
    console.log(+x); //1

    //Converte não números
    console.log(+true); //1
    console.log(+""); //0

    //O uso disso aparece recorrentemente. Quando pegamos valores de formulários HTML, ele são geralmente strings. E se quisermos somá-los?
    //O "+" binário só somaria as strings:
    let apples = "2";
    let oranges = "3";
    console.log(apples + oranges); //23
    //Se quisermos tratá-los como números, basta utilizar o + unário em cada operando:
    console.log(+apples + +oranges) //5, o mesmo que:
    console.log(Number(apples) + Number(oranges));

//Precedência do operador
    //Isso acima ocorre por causa da precedência do operador "+" unário sobre o binário. Ele é calculado antes.

    //Ao calcular com mais de um operador, sabemos que há alguns que dever ser calculados primeiros que outros:
    console.log( 1 + 2 * 5 ); //A multiplicação primeiro
    //E é exatamente isso que se trata. O operador unário "+" tem provedência maior do que o binário. Há uma lista oficial dos operadores prescedentes (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence). Quanto maior a precedência, primeiro é calculado.