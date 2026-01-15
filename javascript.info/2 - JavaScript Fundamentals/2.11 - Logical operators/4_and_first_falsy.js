'use strict';
//AND "&&" encontra o primeiro valor falsy
    let value1 = 1, 
        value2 = 2, 
        value3 = 0;

    let result = value1 && value2 && value3;

    //O operador AND faz o seguinte:
        // 1. Avalia os operandos da esquerda pra direita;
        // 2. Para cada operando, converte para boolean. Se o resultado é false, interrompe-se e retorna o valor original daquele operando;
        // 3. Caso todos os operandos tiverem sido avaliados (p.ex. todos serem truthy), retorna o último operando.

        //Em outras palavras, AND retorna o primeiro valor truthy ou o último valor se nenhum foi encontrado.

    //Exemplos:
    //Se o primeiro é truthy, AND retorna o segundo operando:
    console.log(1 && 0); //0
    console.log(1 && 5); //5

    //Se o primeiro é falso, AND o retorna. O segundo operando é ignorado:
    console.log(null && 5); //null
    console.log(0 && 'não importa o quê'); //0

    //Podemos passar vários valores de uma vez:
    console.log(1 && 2 && null && 3); //null

    //Quando todos são truthy, o último é retornado:
    console.log(1 && 2 && 3); //3

            //Precedência de && é maior do que ||
                //Então o código 'a && b || c && d' é essencialmente o mesmo como se as expressões AND estivessem entre parênteses:
                //(a && b) || (c && d)

            //Não substitua "if" por "||" ou "&&"
                //Algumas vezes, pessoas utilizam AND como uma maneira mais curta de escrever "if":
                let x = 1;

                (x > 0) && console.log('Maior que zero!'); //A ação da esquerda só executaria se fosse true.

                //Basicamente o mesmo que:
                if (x > 0) console.log('Maior que zero!');

                //Porém, if tende a ser mais legível e semântico do que AND.
                //Busque sempre o mais "legível". Vamos utilizar "if" se quiser mos "if" e "&&" se quisermos "&&".