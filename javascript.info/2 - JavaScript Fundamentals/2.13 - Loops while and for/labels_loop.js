'use strict';
Loop: for (let i = 0; i < 3; i++){

    for(let j = 0; j < 3; j++){

        let input = prompt(`Valores nas cordenadas ${i},${j}`);

        if(!input) break Loop;

    }
}

console.log('Feito!');

label: {
    break label;
} //É possível, mas 99,9% das vezes usa-se labels dentro de loops