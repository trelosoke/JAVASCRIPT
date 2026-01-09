'use strict';
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
} //Ao invés de checar e mostrar na mesma função, prefira fazer uma 
// função para cada ação: checar e mostrar.

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }

    return true;
}

function showPrime2(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;

        console.log(i);
    }    
}

showPrime2(20);