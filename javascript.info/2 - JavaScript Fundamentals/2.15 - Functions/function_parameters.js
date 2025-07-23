'use strict';
// function message(from, text){
//     console.log(from + ": " + text);
// };

// message('Ann', 'Hello!');

function showMessage(from, text){ //Aqui, parâmetros (*)
    from = '*' + from + '*';
    console.log(from + ': ' + text);
}

let from = "Ann";

showMessage(from, 'Hello'); //Aqui, argumentos que chamam os parâmetros (*)

console.log(from);