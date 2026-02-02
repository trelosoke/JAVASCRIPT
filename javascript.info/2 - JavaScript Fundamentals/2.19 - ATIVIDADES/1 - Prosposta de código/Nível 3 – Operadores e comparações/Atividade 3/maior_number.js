'use strict';
//Pergunte dois números e diga qual é maior.

let num1 = +prompt("Digite um número:");
let num2 = +prompt("Digite outro número:");

if (num1 > num2) {
    alert(`${num1} é maior que ${num2}.`);
} else if (num1 < num2) {
    alert(`${num2} é maior que ${num1}.`);
} else if (num1 == num2) {
    alert("Ambos são o mesmo número.")
} else {
    alert("Digite um número válido.")
}