'use strict';
//Is it possible to create functions A and B so that new A() == new B()?

// function A() { }
// function B() { }

// let a = new A();
// let b = new B();



// If it is, then provide an example of their code.

//Sim, caso ambas as funções retornem o mesmo objeto
let obj = {};
function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log( a == b ); //true