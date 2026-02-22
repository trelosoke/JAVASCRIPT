'use strict';
//Crie um objeto 'student' e permita que o usuário escolha via prompt qual propriedade deseja visualizar.

let student = {
    name: 'Treloso da Silva',
    age: 22,
    semester: 2,
};

let chooseProp = prompt("Qual propriedade você quer de 'student'?");

if (chooseProp in student) {
    alert(student[chooseProp]);
} else {
    alert("Essa propriedade não existe em 'student'");
}