'use strict';
//What will this code show?

console.log( console.log(1) && console.log(2) ); //1, pois ambos são false (retornam undefined), mas o console.log(1) é avaliado antes de retornar seu boolean. Depois, retorna undefined, desse mesmo primeiro valor falsy. Ou seja, console.log(2) não é avaliado.