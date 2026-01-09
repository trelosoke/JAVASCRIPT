'use strict';
//Para funções que podem não funcionar em códigos antigos, necessitamos de 
//adicionar outra função de outro modo que cumpre o papel da mesma. Para isso 
//temos os polyfills.

if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}