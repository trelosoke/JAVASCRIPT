'use strict';
//Recuo normalmente usado no JS é de 2 espaços ou 4.
function pow(x, n) {
  let result = 1;
  //              <--
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //              <--
  return result;
} //Quebre a linha entre blocos lógicos.

