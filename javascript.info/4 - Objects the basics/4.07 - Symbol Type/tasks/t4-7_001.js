'use strict';
/* 
Crie dois Symbols com a descrição "user".

Verifique se eles são iguais usando == ou ===.

Tente usar console.log() em um deles. O que acontece?

Use a propriedade .description para mostrar apenas o nome do Symbol no console.
*/

let sym1 = Symbol("user");
let sym2 = Symbol("user");

console.log(sym1 === sym2); //false

console.log(sym1); //Mostra que é um symbol e sua descrição: 'Symbol(user)'

console.log(sym1.description); //user