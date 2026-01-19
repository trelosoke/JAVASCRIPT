'use strict';
let condição;
//O loop 'do...while' - faça...enquanto...
    //A verificação da condição movida para depois do corpo do loop usando a sintaxe 'do...while':
    do {
        //corpo do loop
    } while (condição);

    //O loop irá executar primeiramente o corpo, então verificar a condição e, enquanto for 'truthy', executá-lo de novo, e de novo.
    //Por exemplo:
    let i = 0;

    do {
        console.log(i);
        i++
    } while (i < 3);

    //Essa sintaxe deve ser utilizada somente se você quer que o corpo do loop execute pelo menos uma vez sem depender da condição ser verdadeira. Por exemplo:

    // let numero;

    // do {
    //     numero = +prompt('Digite um número maior que 10:', '');
    // } while (numero <= 10);

    //O uso de 'do...while' acima é necessário, pois é preciso executar o prompt para mostrá-lo antes do resultado do número. Caso usassemos o while, a mensagem nem apareceria. 
    
    // Geralmente, a outra forma é preferida: 'while(...) {...}'.