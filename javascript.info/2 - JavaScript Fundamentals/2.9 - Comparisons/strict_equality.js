'use strict';
console.log(0 == false); //false é convertido para number (0). o operador "==" faz isso
console.log('' == false); //'' e false são convertidos para number, ambos 0.

//Operador de igualdade estrita "==="
console.log(0 === false); //false, pois esse operador analisa o valor e o tipo. Caso ambos sejam diferentes, é falsy.

console.log(0 != "0"); //Aqui ele analisa somente o valor, por isso, true.
console.log(0 !== "0"); //Aqui, analisa o tipo. Um sendo string e o outro number, é true.