'use strict';
//A sintaxe
    //O "switch" tem um ou mais blocos de "case" e um "default" opcional.
    //Parece-se com isto:
    let a = 2 + 2;

    switch (a) {
        case 3: //if (a === 3)
            console.log('Muito curto.');
            break;
        case 4: //else if (a === 4)
            console.log('Exato!');
            break;
        case 5: //else if (a === 5)
            console.log('Muito longo.');
            break;
        default: //else
            console.log('Não conheço tais valores.');
    }

    //A procura de igualdade entre "a" e os valores nos blocos "case" é sempre ESTRITA (===), ou seja, por valor e tipo.
    //Caso não houvesse "break" após cada ação dentro do case, tudo seria executado sem verificação a partir do primeiro que desse true. Nesse exemplo, a partir do case 4, tudo seria executado.


            //Qualquer expressão pode ser um argumento "switch-case"
                //Ambos "switch" e "case" permitem expressões arbitrárias:
                let b = "1";
                let c = 0;

                switch (+b) { //Number(b)
                    case c + 1: //if (+b === (c + 1))
                        console.log('Isso é executado, pois +b é 1, exatamente igual a c + 1.');
                        break;
                    default: //else
                        console.log('Isso não executa.');
                }