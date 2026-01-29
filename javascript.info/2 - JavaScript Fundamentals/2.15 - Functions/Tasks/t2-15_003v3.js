'use strict';
//Write a function min(a,b) which returns the least of two numbers a and b.
//Verificação separada de visualização
function checkMin(a, b) {
    return (a < b) ? a : b;
}

function showMin(a, b) {
    if (checkMin(a, b)){
        console.log(checkMin(a, b));
    }
}