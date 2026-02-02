'use script';
//Repita o exercício anterior, mas usando ??.

let user = prompt("Seu nome de usuário:");

alert(user ?? "Usuário"); //Difere-se de OR, pois mostra a segunda opção SOMENTE se user for null ou undefined, não só falsy.