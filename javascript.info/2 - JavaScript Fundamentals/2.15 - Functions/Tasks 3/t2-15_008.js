'use script';
//Crie uma função double(n) que retorna o dobro de n.
// Depois, crie uma função quadruple(n) que use double duas vezes para chegar ao resultado.

function double(n) {
    return n * 2;
}

function quadruple(n) {
    return double(double(n));
}

console.log(double(5));
console.log(quadruple(5));