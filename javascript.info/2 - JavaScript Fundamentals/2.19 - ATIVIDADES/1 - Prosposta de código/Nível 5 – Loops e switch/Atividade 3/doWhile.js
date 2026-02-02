'use strict';
//Crie um loop que peça números até o usuário digitar 0.
let pedirNumer;
do {
    pedirNumer = +prompt("Digite qualquer número. Quando quiser sair da iteração, digite 0.");
} while (pedirNumer !== 0);