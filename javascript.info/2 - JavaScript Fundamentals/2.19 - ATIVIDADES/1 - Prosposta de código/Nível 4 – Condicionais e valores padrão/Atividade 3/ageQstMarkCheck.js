'use script';
//Pergunte a idade e diga “Maior de idade” ou “Menor de idade” usando ? :.

let idade = +prompt("Sua idade");

(idade >= 18) ? 
    alert("Maior de idade.") :
    (idade > 0 && idade < 18) ?
        alert("Menor de idade") :
        alert("Insira um número válido");