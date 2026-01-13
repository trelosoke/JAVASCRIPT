'use strict';
//A "cláusula" else
        //Explicação: cláusula é usado aqui pois as condicionais são ramificações. "else" é uma das partes dessa ramificação, logo, é uma cláusula.
    
    //O "if" pode conter um bloco opcional "else", que é executado quando o primeiro é "falsy":
    let year = 2026;

    if(year == 2026){ //Se "year" igualar a "2026"
        console.log('Acertou!'); //Isso é executado
    } else { //Senão
        console.log('Errou! Estude mais.'); //Isso é executado
    }