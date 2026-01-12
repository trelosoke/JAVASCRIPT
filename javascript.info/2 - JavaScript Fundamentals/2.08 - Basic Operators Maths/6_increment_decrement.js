'use strict';
//Incremento e decremento
    //Aumenta ou diminui o número por um (funciona somente em variáveis).

    //Incremento (++): aumenta uma variável por 1:
    let cont = 2;
    cont++;
    console.log(cont); //3

    //Decremento (--): diminui uma variável por 1:
    let cont2 = 2;
    cont2--;
    console.log(cont2); //1

//Eles podem vir em duas formas: prefixo ou sufixo. Ambas aumentam ou diminuem a variável por 1. Porém, há algumas diferenças.
    //Forma "prefixo" (prefix form): vem antes da variável (++cont)
        //Retorna o valor novo, que foi adicionado
        let counter = 1;
        let a = ++counter; //Aqui ele incrementa counter por 1 e depois retorna o novo valor.

        console.log(a); //2, pois foi adicionado mais um

    //Forma "sufixo" (postfix form): vem depois da variável (cont++)
        //Retorna o valor antigo da variável
        let counter2 = 1;
        let a1 = counter2++; //Primeiro retorna o valor de counter2, depois incrementa por 1

        console.log(a1); //1

            //Nota: MUITO importante para entender loops.

//Incremento/decremento entre outros operadores
    //Precedência maior que a maioria dos operadores. Por exemplo:
    let contador = 1;
    console.log(2 * ++contador); // 4

    //Compare com
    let contador2 = 1;
    console.log(2 * contador2++); // 2, pois o contador2 está sendo retornado na sua forma antiga.

    //Mesmo isso sendo possível, não é muito legível de forma vertical. O melhor é fazer apenas uma ação em cada linha:

    let contador3 = 1;
    ++contador3
    console.log(2 * contador3); //O mesmo que incrementar com prefixo

    let contador4 = 1;
    console.log(2 * contador4);
    contador4++ //O mesmo que incrementar com sufixo