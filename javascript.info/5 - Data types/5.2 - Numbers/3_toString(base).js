'use strict';
//toString(base)
    //O método 'num.toString(base)' retorna a representação em string de 'num' no sistema numérico com a 'base' fornecida:
        let num = 255;

        console.log(num.toString(16)); //ff
        console.log(num.toString(2)); //111111

    //A base pode variar de 2 a 36. Por padrão, é 10.

    //Usos comuns para isso são:
        //base=16 é usado para cores hexadecimais, codificação de caracteres, etc. Dígitos podem ser 0 a 9 ou A a F. 
            //Seguindo uma sequência lógica, os números em hex seriam:
            /* 
             *  1: 01
             *  9: 09
             *  10: 0a
             *  15: 0f
             *  16: 10
             */
            //A ordem segue: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f

        //base=2 é mais utilizado para depurar (debugar) operações 'bitwise'. Dígitos podem ser 0 e 1.

        //base=36 é o máximo. Dígitos podem ser 0 a 9 ou A a Z. O alfabeto latino inteiro é usado para representar um número. Um caso engraçado, mas útil, para 36 é quando precisamos transformar um 'identifier' numérico longo dentro de algo menor, por exemplo, fazer um URL menor. Pode-se simplesmente representá-lo no sistema numérico com base 36:

        console.log(123456789..toString(36));
        //Poderia ser um id muito grande de um usuário, por exemplo. Ao ir na URL dele, estar um número muito grande deixa a URL muito longa. Logo, esse método encurta o número.

            //!-- Dois pontos para chamar um método
                //Por favor note que os dois pontos em '123456789..toString(36)' não são erro de digitação (typo). Se queremos chamar um método diretamente em um número, como 'toString' no exemplo acima, então precisamos colocar dois pontos '..' depois.

                //Se colocássemos um único ponto: '123456789.toString(36)', então haveria um erro, pois a sintaxe do JavaScript considera o primeiro ponto como uma transição para a parte decimal do número. Se colocamos mais de um ponto, então o JS sabe que a parte decimal está vazia e agora usa o método.

                //Também poderia ser '(123456789).toString(36)'.