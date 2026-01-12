'use strict';
//Além dos operadores básicos, como de adição ou subtração, o JavaScript os aprofunda e também usa alguns outros.

//Antes de mostrar os operadores, vamos a alguns conceitos

//Termos: "unário", "binário", "operando"
    //Um operando é aquilo que o operador aplica sobre. Por exemplo, na expressão "5 * 2" há dois operandos: 5 e 2. Algumas vezes, as pessoas chamam de "argumentos (arguments)" ao invés de "operandos".

    //Um operador é unário se tem um único operando. Por exemplo, a negação unária (-) reverte o sinal de um número.
    let x = 1;
    x = -x;
    console.log(x); //-1

    //Um operador é binário se tem dois operandos. O mesmo "menos" existe na forma binária:
    let y = 1, z = 3;
    console.log(z - y);

    //Formalmente, acima temos dois operadores diferentes. O operador de negação, unário e que reverte o sinal, e o operador de subtração, binário e que subtrai um número de outro.

//Contas (operadores matemáticos)
    // Adição +
    // Subtração -
    // Multiplicação *
    // Divisão /
    // Resto (Remainder) %
    // Exponenciação **

    //Resto (Remainder)
        //Restorna o resto de uma divisãode números inteiros. Nada relacionado a porcentagem, a pesar de ser o operador.
        console.log( 10 % 2 ); // 0, o resto da divisão entre 10 e 2
        console.log( 7 % 2 ); // 1, o resto da divisão entre 10 e 2

    //Exponenciação
        //O operador de exponenciação "a**b" eleva "a" à potência de "b".
        console.log(2 ** 2); // 2 elevado a 2; 2 * 2 = 4
        console.log(10 ** 3); // 10 elevado a 3; 10 * 10 * 10 = 1000
        
        console.log(Number.MAX_SAFE_INTEGER == (2**53 - 1));

        //Assim como na matemática, ele é definido para números não inteiros também:
        console.log(4 ** (1/2)); //O mesmo que raiz quadrada de 4 (2)
        console.log(8 ** (1/3)); //O mesmo que raiz cúbica de 8 (2)