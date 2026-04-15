'use strict';
/* 
What is the result? Why?
*/

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ?

/* 
 * Retorna o próprio array, pois ao adicionar a função executada retorna uma exibição
 * do próprio objeto no console (ou seja, o próprio array, já que ele é um objeto).
 */