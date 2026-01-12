'use strict';
//Também pode acontecer com operadores lógicos, mas por agora, pode-se usar Boolean(valor)

//Regras
    //Valores que são intuitivamente "vazios", como "0", uma string vazia, null, undefined e NaN, se tornam "false"
    //Outros valores se tornarm "true"

    console.log(Boolean(1));
    console.log(Boolean(0));

    console.log(Boolean(null));
    console.log(Boolean(undefined));

    console.log(Boolean("Olá"));
    console.log(Boolean(""));

    //Aviso: Uma string com "0" e com espaço, como " ", também são true.
    //Qualquer string que não esteja vazia ("") é verdadeira.
    console.log(Boolean("0"));
    console.log(Boolean(" "));