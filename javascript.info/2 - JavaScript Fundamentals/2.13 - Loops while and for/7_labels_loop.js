'use strict';
//Rótulos para break/continue (labels for break/continue)
    //Algumas vezes precisamos "quebrar (break out)" de loops aninhados com múltiplas linhas de uma vez.
    //Por exemplo, no código abaixo nós iteramos (fazemos loop) sobre 'i' e 'j', solicitando as coordenadas (i, j) de (0, 0) para (2, 2):
    /* 
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            let input = prompt(`Valor nas coordenadas (${i},${j})`);

            //E se quisermos sair daqui para 'Concluído' (abaixo)?
        }
    }

    alert('Concluído'); 
    */

    //Precisamos de uma maneira de parar o processo caso o usuário cancele o 'input'.

    //O 'break' ordinário após o 'input' só pararia o loop interno (o loop dentro do loop). Isso não é suficiente. Labels, venham para o resgate!

//Uma label (um rótulo) é um identificador com um dois pontos (:) antes de um loop.
    // labelName: for (...) {
    //     ...
    // }

    //A declaração break <labelName> no loop abaixo sai para a label:
    outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Valor nas coordenadas (${i},${j})`);

            //Se é uma string vazia ou cancelada, então saia de ambos os loops
            if (!input) break outer; //(*)

            //faça algo com o valor caso o if acima não rode...
        }
    }

    alert(concluído);

    //No código acima, 'break outer' procura pela label (rótulo) chamada "outer" e sai do loop o qual a label se refere.
    //Logo, o controle vai diretamente da linha (*) para 'console.log('Concluído')'.

    //Podemos também mover a label para uma linha separada:
    // outer:
    // for (let i = 0; i < 3; i++) {...}

    //O comando 'continue' também pode ser usada como label. Nesse caso, a execução do código pula para a próxima iteração do loop rotulado.

            //Labels não permitem "pular" para qualquer lugar
                //Labels só permitem nós utilizá-las com break e com continue dentro de loops:
                // break label;
                // label: for (..)

                //ou

                // label: for (..)
                // break label;
                
                //No exemplo acima, a label foi formada depois do break, o que não funciona. Somente dentro do próprio loop.