'use strict';
//Strings são imutáveis
    //Strings não podem ser alteradas no JavaScript. É impossível mudar um caractere.
    //Vamos tentar para mostrar que não funciona:
        let str = 'Hi';

        //str[0] = 'h';   //erro
        //console.log( str[0] );  //não funciona 

    //Normalmente o contorno para essa situação é criar uma string nova e associá-la à 'str' ao invés da antiga:
        str = 'Hi';

        str = 'h' + str[1]; //substitui a string inteira

        console.log( str ); //hi

    //Nas sessões seguintes iremos explorar mais isso.