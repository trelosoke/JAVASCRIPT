'use strict';
//Várias funções auxiliares e as formas de organizá-las
//1. Declarar as funções acima do código que as usa
// function declarations
function createElement() {
  //...
}

function setHandler(elem) {
  //...
}

function walkAround() {
  //...
}

// the code which uses them
let elem = createElement();
setHandler(elem);
walkAround();

//2. Código primeiro, depois as funções

// the code which uses the functions
let elem2 = createElement();
setHandler(elem2);
walkAround();

// --- helper functions ---
function createElement() {
  //...
}

function setHandler(elem2) {
  //...
}

function walkAround() {
  //...
}