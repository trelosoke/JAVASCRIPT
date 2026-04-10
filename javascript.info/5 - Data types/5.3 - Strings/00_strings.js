'use strict'
//Strings
    //No JavaScript, dados textuais são armazenados como STRINGS. Não há um tipo separado para um único caractere, como no C++, por exemplo.
    //O formato interno para strings é sempre UTF-16; ele não está vinculado à codificação da página. 
                //UTF-16 e UTF-8
                    //Antigamente, o formato padrão Unicode (representação de caracteres em computadores) era o UTF-16, que estabelecia cada caractere com 2 bytes (16 bits) de tamanho cada, independentemente de qual. Isso era uma vantagem, pois para encontrar um caractere em uma posição específica, tinha um cálculo mais simples e constante. Na época eles acreditavam que os 2^16 (65.536) caracteres eram suficientes para todas as linguas do mundo.

                    //Entretanto, não imaginavam que várias outras representações poderiam aparecer, como os emojis. Por isso, o UTF-8 surgiu. Além de representar os caracteres por 1 byte (8 bits), como ele é "multibyte", na verdade ele representa entre 1 e 4 bytes. Por 1 byte, o UTF-8 pode representar 2^7 (128) caracteres, pois o primeiro bit é reservado para determinar se o caractere é comum (A-Z; 0-9; pontuação básica; @, #, $, *) ou se é incomum (letras acentuadas; alfabetos não-latinos; emojis).

                    //O JavaScript, por uma questão histórica, utiliza UTF-16. Porém, em caracteres incomuns, ele utiliza 2 blocos de 16 bits (chamado de cálculo de Surrogate Pairs/Pares Substitutos).