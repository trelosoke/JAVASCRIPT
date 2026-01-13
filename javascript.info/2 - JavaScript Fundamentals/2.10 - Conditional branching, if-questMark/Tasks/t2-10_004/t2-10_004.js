'use strict';
//Rewrite this if using the conditional operator '?':
/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} 
*/

let a = 2;
let b = 4;

let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);