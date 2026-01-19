'use strict';
//O tipo importa
    //Vamos enfatizar que o teste de igualdade é SEMPRE estrito (===). Os valores devem ser do mesmo tipo para corresponder.
    //Por exemplo, vamos considerar o código:
    let arg = '3'; //Isso era para ser um "prompt('Insere um valor?');", que retorna string por padrão

    switch (arg) {
        case '0':
        case '1':
            console.log('Um ou zero');
            break;
        case '2':
            console.log('Dois');
            nreak;

        case 3:
            console.log('Nunca executa.');
            break;

        default:
            console.log('Um valor desconhecido')
    }

    //Como 3 está como number, a igualdade estrita retorna false. Logo, com uma string '3', retorna o que está em default.