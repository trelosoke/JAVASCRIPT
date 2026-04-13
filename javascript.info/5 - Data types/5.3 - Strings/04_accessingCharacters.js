'use strict';
//Acessando caracteres
    //Para obter um caractere na posição 'pos', use colchetes '[pos]' ou chame o método 'str.at(pos)'. O primeiro caractere começa na posição '0':
        let str = `Hello`;

        //o primeiro caractere
        console.log(str[0]); //H
        console.log(str.at(0)); //H

        //o último caractere
        console.log(str[str.length - 1]); //o
        console.log(str.at(-1));

    //Como você pode ver, o método '.at(pos)' tem o benefício de permitir posições negativas. Se 'pos' é negativo, então é contada do final da string.

    //Então '.at(-1)' significa o último caractere, e '.at(-2)' é um antes dele, etc.

    //Os colchetes sempre retornam 'undefined' para índices negativos, por exemplo:
        let str2 = `Hello`;

        console.log(str[-1]); //undefined
        console.log(str.at(-2)) //l

    //Também podemos iterar sobre caracteres usando 'for...of':
        for (let character of "Hello") {
            console.log(character);
        }
                //Não se preocupe. No próximo cápítulo "Arrays" isso será melhor explicado.