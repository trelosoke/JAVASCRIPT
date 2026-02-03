'use strict';
//Crie uma função que pede 5 números, soma todos e mostra o resultado.

function getFiverNumbers() {
    let soma = 0;
    let contador = 0;
    let stop = false;
    do{
        let number = +prompt("Insira um número") ?? "";
        
        if (isNaN(number)) {
            alert("Digite um número válido.");
            stop = true;
            break;
        }
        
        soma += number;
        contador++;
    } while(contador < 5);

    if (!stop) { alert(`Resultado da soma: ${soma}`) };
}

getFiverNumbers();