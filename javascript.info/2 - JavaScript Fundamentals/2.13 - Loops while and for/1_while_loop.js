'use strict';
let condição;
//O loop 'while' - enquanto...
    //O loop 'while' tem a seguinte sintaxe:
    while (condição) {
        // código/corpo do loop (loop body)
    }

    //Enquanto a condição for "truthy", o código do corpo do loop é executado.
    //Por exemplo, o código abaixo exibe 'i' enquanto 'i < 3':
    let i = 0;

    while (i < 3) { //mostra 0, então 1, então 2
        console.log(i);
        i++;
    }

    //Uma única execução do corpo do loop chama-se 'iteração'. O loop do exemplo acima faz 3 iterações.

    //Se 'i++', no exemplo acima, não estivesse presente, o loop repetiria (em teoria) para sempre. Na prática, o navegador fornece maneiras de parar tais loops, e no JavaScript do server-side, é possível "matar" esse processo.
        //'i++' serve como garantia de que o loop terminará, já que ele, a cada iteração, vai adicionando o valor da variável 'i' em 1. Quando 'i = 3', a iteração para.

    //Qualquer expressão ou variável pode estar na condição do loop, não somente comparações: a condição é avaliada e convertida para boolean por 'while'.

    //Por exemplo, uma maneira mais curta de escrever 'while (i != 0)' é 'while (i)':
    let j = 3;
    
    while (j) { //Ou seja, enquanto j não for "falsy". Nesse caso, não for 0;
        console.log(j); //Isso é executado
        j--; //Isso é executado, diminuindo o valor de j em -1
    } //O processo se repete até a condição se tornar falsa.