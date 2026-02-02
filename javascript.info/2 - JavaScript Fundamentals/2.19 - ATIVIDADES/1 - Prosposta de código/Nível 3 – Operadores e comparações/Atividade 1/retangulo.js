'use strict';
//Calcule a área de um retângulo com base e altura fornecidas pelo usuário.~

let retangBase = +prompt("Base do retângulo (em cm):");
let retangAltura = +prompt("Altura do retângulo (em cm):");

let retangArea = retangBase * retangAltura;

alert("Área do retângulo: " + retangArea + "cm²");