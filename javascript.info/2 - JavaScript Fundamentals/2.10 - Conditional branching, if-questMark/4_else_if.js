'use strict';
//Muitas condições: "else if"
    //Algumas vezes, gostariamos de testar muitas variantes de uma condição. A cláusula "else if" nos permite isso:
    let year = 2026;

    if(year < 2026){ //falso? Pula pro próximo
        console.log('Muito cedo');
    } else if(year > 2026) { //falso? Pula pro próximo
        console.log('Muito tarde');
    } else { //Caso todos os anteriores forem falsos, ele é executado
        console.log('Exato!');
    }

    //É possível também colocar um else if no final, com uma condição.
    //   ...
    // } else if (year == 2026){ 
    //     console.log('Exato!');
    // }

    //Isso restringe mais para que outras respostas não atrapalhem. 