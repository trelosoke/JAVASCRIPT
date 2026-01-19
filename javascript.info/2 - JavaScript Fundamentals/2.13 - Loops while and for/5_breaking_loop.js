'use strict';
//Quebrando o loop (breaking the loop)
    //Normalmente, um loop sai quando sua condição torna-se 'falsy'. 
    //Mas podemos forçar a saída a qualquer momento usando a 'diretiva' especial "break".
            //Diretiva, em suma, é um comando de controle de fluxo do código. 'break' é uma, pois controla o fluxo, nesse caso, do loop. Onde ele parará.

    //Por exemplo, o loop abaixo pede ao usuário por uma série de números, "quebrando (breaking)" quando nenhum número é inserido:
    let soma = 0;

    while(true) {
        let valor = 0; //+prompt("Insira um número:", ''); -- vamos imaginar que o usuário escreveu zero. Caso fosse outro valor não "falsy", o loop ficaria infinito. Isso é só um exemplo.

        if (!valor) break; //(*)

        soma += valor;
    }

    console.log(`Soma: ${soma}`);

    //A diretiva 'break' é ativada na linha (*) se o usuário inserir uma string vazia ou cancelar o input.Para o loop imediatamente, passando controle para a primeira linha após o loop. Nomeadamente, console.log.

    //A combinação "loop infinito + 'break' quando precisar" é ótima para situações quando uma condição de um loop deve estar verificada não no início ou fim do loop, mas no meio ou até em vários lugares de seu corpo.