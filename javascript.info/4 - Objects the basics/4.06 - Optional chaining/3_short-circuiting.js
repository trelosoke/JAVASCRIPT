'use strict';
//Short-circuition (usando curto-circuito)
    //Como foi dito anteriormente, o '?.' imediatamente interrompe ("curto-circuita") a avaliação se a parte esquerda não existe.
    //Então, se houver quaisquer outras chamadas de função ou operações à direita de '?.', não será feito:
    let user = null;
    let x = 0;

    user?.sayHi(x++); //não há 'user', então a execução não alcança a função

    console.log(x); //0