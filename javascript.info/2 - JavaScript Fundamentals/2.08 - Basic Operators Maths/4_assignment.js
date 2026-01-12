'use strict';
//Atribuição (assignment)
    //Uma atribuição (=) também é um operador. Ele tem uma precedência bem baixa de 2. Por isso, quando realizamos um cálculo na variável, são calculados primeiros e depois avaliados, armazenando o resultado na variável:
    let x = 2 * 2 - 3;
    console.log(x); //1

//Atribuição (=) retorna um valor
    //Assim como 1 + 1 retorna 2 e 5 * 2 retorna 10, o operador de atribuição também retorna um valor, como na expressão abaixo:
    let a = 1;
    let b = 2;

    let c = 3 - (a = b + 1); // a = b retorna que a = 3, pois a = b + 1.
    console.log(a); //3
    console.log(c); //0

    //Nota: é importanta sabermos dessa funcionalidade, pois é usado em algumas bibliotecas, mas não escreva seu código desse jeito. Não é claro e nem legível.

//Atribuições em cadeia
    let d, e, f;

    d = e = f = 2 + 2; //Avaliada da direita para a esquerda.
    //Primeiro, a expressão "2 + 2" é avaliada, logo após, armazenada em "f", depois "e" e, por fim, "d".

    //Para melhor legibilidade, é melhor rescrevê-lo em linhas separadas para cada atribuição:
    f = 2 + 2;
    e = f;
    d = e;
    
    console.log(d); //4
    console.log(e); //4
    console.log(f); //4