'use strict';
//Quando comparando diferentes tipos, os operadores convertem os valores para number:
console.log('2' > 1); //true
console.log('01' == 1); //true

//Para valores boolean, "true" se torna 1 e "faLse", 0>
console.log(true == 1); //true
console.log(false == 0); //true

    //Consequência engraçada
        //É possível que, ao mesmo tempo:
        // - Dois valores são iguais;
        // - Um deles é true como boolean e o outro falso como boolean.
        //Por exemplo
        let a = 0;
        console.log(Boolean(a)); //false - está no tipo number, 0 é falso

        let b = '0';
        console.log(Boolean(b)); //true - está no tipo string. Qualquer string que não está vazia é true

        console.log(a == b); //true - a igualdade transforma ambos os valores em number