'use strict';
//Continuar para a próxima iteração (continue to the next iteration)
    //A diretiva 'continue' é uma "versão mais leve" do 'break'. Não interrompe todo o loop, interrompe a iteração atual e força o loop a começar uma nova (se a condição permitir).
    //Podemos utilizar isso se terminarmos a iteração atual e quisermos passar para a próxima.
    
    //O loop abaixo usa 'continue' para exibir apenas valores ímpares:
    
    for (let i = 0; i < 10; i++) {

        if (i % 2 == 0) continue; //Caso o resto da divisão entre 'i' e 2 for igual a 0 (ou seja, se ele for par), pule a parte restante do corpo.
        console.log(i); //1, então 3, 5, 7 e 9
    }
    
    //Para valores pares de 'i', a diretiva 'continue' para a execução do corpo e passa controle para a próxima iteração de 'for' (com o próximo número). Então o console.log só chamado para valores ímpares.

            //A diretiva 'continue' ajuda a diminuir aninhamento
                //Um loop que mostra valores ímpares pode parecer com isso:
                for (let i = 0; i < 10; i++) {
                    if(i % 2) {
                        console.log(i);
                    }
                }

                //De um ponto de vista técnico, isso é idêntico ao exemplo anterior. Certamente, podemos apenas envolver o código em um bloco 'if' ao invés de utilizar 'continue'.
                //Mas como efeito colateral, isso criou um nível a mais de aninhamento (a chamada (call) "console.log" dentro das chaves {}) Se o código dentro de 'if' é maior que algumas linhas, isso pode diminuir a legibilidade geral.

            //Sem break/continue ao lado direito de '?'
                //Por favor note que construções de sintaxe as quais não são expressões não podem ser usadas com o operador ternário '?'. Em particular, diretivas como break/continue não são permitidas nele.
                //Por exemplo, se fizermos este código:
                // if (i > 5) {
                //     console.log(i);
                // } else {
                //     continue; -- Não funciona, pois deve estar dentro de um loop. Só um exemplo.
                // }
                
                //E reescrevermos com '?':
                // (i > 5) ? console.log(i) : continue 

                //Daria erro de sintaxe. Utilize somente no if.