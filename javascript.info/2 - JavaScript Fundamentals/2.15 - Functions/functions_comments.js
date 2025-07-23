'use strict';
//Functions devem ser curtas e dizerem específicamente o que fazem. Casa uma função tenha muitas ações, o mais correto seria separá-la em mais funções menores. Talvez não seja fácil, mas é o ideal.
//A existência dessas pequenas funções não só deixa mais fácil de depurar e testar, mas são comentários em si!

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log( i ); // a prime
  }
}

showPrimes(20);


function ehPrimo(n){
    if(n <= 1) false;
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
    } 
    return true;
}

function mostrarPrimo(n){
    for(let i = 2; i <= n; i++){
        if(!ehPrimo(i)) continue;
        console.log(i);
    }
}

//A função ehPrimo serve como comentário, pois seu nome diz exatamente o que faz: número (n) é primo e faz uma verificação. Esse modo é bom por essa verificação poder ser reutilizável, sem mostrar nenhuma mensagem. É uma verificação pura.

mostrarPrimo(20);