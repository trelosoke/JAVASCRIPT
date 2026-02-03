'use strict';
//Crie um programa que pede usuário e senha com prompt. Se for “admin” e “1234”, mostra “Bem-vindo!”, senão “Acesso negado”.

let userName = prompt("Nome de usuário:", '');
let password = prompt("Senha:");

if (userName !== "admin" || password !== "1234") {
    alert("Acesso negado");
} else {
    alert("Bem-vindo!");
}