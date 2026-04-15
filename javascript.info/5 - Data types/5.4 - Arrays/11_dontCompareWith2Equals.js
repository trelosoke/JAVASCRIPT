'use strict';
//Não compare arrays com '=='
    //Arrays no JavaScript, diferente de algumas outras linguagens de programação, não devem ser comparados com o operador '=='.

    //Esse operador não tem um tratamento especial para arrays, funciona igualmente para eles e para quaisquer objetos.

    //Vamos relembrar as regras:
        // - Dois objetos são iguais '==' apenas se eles referenciam para o mesmo objeto.
        // - Se um dos argumentos de '==' é um objeto, e o outro é um primitivo, então o objeto é convertido para primitivo, como explicado no capítulo "Object to primitive conversion".
        // - Como excessão de 'null' e 'undefined' que igualam '==' um ao outro e nada mais.

    //A comparação estrita '===' é ainda mais simples, já que não converte tipos.

    //Logo, se compararmos arrays com '==', eles nunca são os mesmos, a não ser que comparemos duas variáveis que referenciem o mesmo array.
    //Por exemplo:
        console.log([] == []); //false
        console.log([0] == [0]); //false

    //Esses arrays são tecnifamente objetos diferentes. Então eles não são iguais. O operador '==' não faz uma comparação item por item.

    //A comparação com primitivos pode dar resultados aparentemente estranhos:
        console.log(0 == []); //true
        console.log('0' == []); //false

    //Aqui, em ambos os casos, comparamos um primitivo com um objeto array. Então o array é convertido para primitivo para o propósito de comparação e se torna uma string vazia ''.

    //Então o processo de comparação vai em primitivos, conforme descrito no capítulo "Type Conversions":
        //depois que [] foi convertido em ''
        console.log(0 == ''); //true, já que '' foi convertido para o número 0
        console.log('0' == ''); //false, sem conversão de tipos, strings diferentes


    //Então como comparar arrays?

    //Isso é simples: não use o operador '=='. Ao invés disso, compare-os item por item em um loop ou usando métodos de iteração explicados no próximo capítulo.