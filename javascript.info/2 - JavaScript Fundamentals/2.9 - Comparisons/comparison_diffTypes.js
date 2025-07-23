'use strict';
console.log("2" > 1); //Converte para number, independentemente.

//Situação engraçada 

let a = 0;
console.log(Boolean(a)); //false, já que 0, null, ""(string vazia) é falso

let b = "0"; //Nesse caso, não temos um número, mas uma string não vazia, ou seja
console.log(Boolean(b)); //true!

console.log(a == b); //Porém, ainda assim, a == b é true, pois seus valores são os mesmos: 0.