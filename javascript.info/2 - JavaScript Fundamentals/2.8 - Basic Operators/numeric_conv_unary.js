'use strict';
let verdade = true;
console.log(typeof verdade);

verdade = Number(true);
verdade = +true; // + converte para number
console.log(typeof verdade);

let maçãs = "1";
let laranjas = "4";

console.log(+maçãs + +laranjas)