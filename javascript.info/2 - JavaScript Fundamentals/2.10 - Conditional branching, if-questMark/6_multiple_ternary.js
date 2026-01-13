'use strict';
//Múltiplos '?'
    //Bem parecido com a cadeia de "else if"s, temos a possibilidade de varios valores com mais condições:
    let idade = 18;

    let mensagem = (idade < 3) ? 'Olá, babê!' :  //condição: idade < 3 ? Se sim, retorna 'Olá, bebê'. Senão, próxima condição
        (idade < 18) ? 'Olá!' :
        (idade < 100) ? 'Saudações!' : 'Que idade inusitada!';

    console.log(mensagem);

    //Convertendo para if...else
    // if (idade < 3){
    //     mensagem = 'Olá, bebê!';
    // } else if (idade < 18) {
    //     mensagem = 'Olá!';
    // } else if (idade < 100) {
    //     mensagem = 'Saudações!';
    // } else {
    //     mensagem = 'Que idade inusitada!';
    // }