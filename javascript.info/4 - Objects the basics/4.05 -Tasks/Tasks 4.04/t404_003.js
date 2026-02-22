'use strict';
//Crie uma função que imprime 'this' e execute-a em modo estrito e não estrito. Compare os resultados.

function printThis() {
    console.log(this);
}

printThis(); //No modo estrito, ele retorna 'undefined'
//No modo não estrito, o 'this' é referência ao objeto global do JS. No Node.js, o objeto global chama-se 'global'. Em navegadores, chama-se 'window'. Futuramente esse assunto será abordado.