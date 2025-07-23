'use strict';
function soma(a, b){
    return console.log( a + b );
}
soma(10, 2);

function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return confirm('Seus pais permitem sua entrada?');
    }
}

let age = prompt('Qual sua idade?', 18);

if(checkAge(age)) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso negado.');
}

function showMovie(age) {
  if ( !checkAge(age) ) {
    return; //Nesse caso, return faz com que a função pare de executar nesse ponto.
  }

  console.log( "Showing you the movie" ); // (*)
  // ...
}

//Nunca adicione uma nova linha para o código de return. Somente coloque na mesma linha ou comece um parenteses na mesma linha do return antes.

return
    console.log('oi');