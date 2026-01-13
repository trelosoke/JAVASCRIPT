'use strict';
//Há um comportamento não intuitivo quando null ou undefined são comparados com outros valores:
    console.log(null === undefined);//false, pois são de tipos diferentes

    console.log(null == undefined); //O casalzinho. O "==" converte ambos em number. Para null, "0"; para undefined, NaN. Porém, só funciona se for entre esses dois. Null ou undefined não se igualam a nada mais.

//Casos engraçados (para não cair neles)
    //Null vs 0
    console.log(null > 0); //false (*)
    console.log(null == 0); //false. Aqui, "==" se comporta diferente dos relacionais. Ele não converte para number. Como já foi dito, null só se iguala a undefined e vice-versa.
    console.log(null >= 0); //true. Tanto aqui, quanto em (*) são usados operadores relacionais (comparativos). Esses convertem para number, independentemente.

    //Um "undefined" incomparável
    console.log(undefined > 0); //false (*)
    console.log(undefined == 0); //false. undefined só iguala-se à null e a ele mesmo.
    console.log(undefined < 0); //false. Tanto aqui, quanto em (*), undefined é convertido em number, resultando em NaN, que retorna false.

    //Moral: 1. não use relacionais com váriáveis que tenham null e undefined se não souber o que faz; 2. trate qualquer comparação undefined/null com cuidado, exceto "===".