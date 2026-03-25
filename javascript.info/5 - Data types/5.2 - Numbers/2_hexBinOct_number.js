'use strict';
//Números hex, binários e octais
    //Números hexadecimais são amplamente utilizados no JavaScript para representar cores, codificar caracteres e muitas outras coisas. Então naturalmente, existe uma maneira encurtada de escrevê-los: '0x' e depois o número. Por exemplo:
        console.log(0xff); //255
        console.log(0xFF); //255, mesma coisa, a caixa alta não importa

    //Os sistemas numéricos binário e octal são raramente utilizados, mas também supotados usando os prefixos '0b' e '0o':
        let a = 0b11111111; //forma binária de 255
        let b = 0o377; //forma octal de 255

        console.log(a === b); //true


    //Há apenas 3 sistemas numéricos com tal suporte. Para outros, devemos utilizar a função 'parseInt' (que será abordado mais para frente nesse capítulo).