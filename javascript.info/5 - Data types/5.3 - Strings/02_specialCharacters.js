'use strict';
//Caracteres especiais
    //Ainda é possível criar strings "multilinha" com aspas simples ou duplas usando um caractere "newline", escrito como '\n', que representa uma quebra de linha:
        let guestList = "Convidados:\n * John\n * Pete\n * Mary";

        console.log(guestList);

    //Como um exemplo mais simples, essas duas linhas são iguais, apenas escritas diferentemente:
        let str1 = "Hello\nWorld"; //duas linhas usando o newline symbol

        //duas linhas usando um newline normal e acento grave
let str2 = `Hello
World`;
            //Note que a tabulação (TAB) em str2 é levada em consideração
            let str3 = `Hello 
            World`;

            console.log(str2 == str3); //false

        console.log(str1 == str2); //true


    //Existem outros caracteres especiais menos comuns:

        //  \n - New line
        //  \r - CRLF (explicar depos)
        //  \', \", \` - aspas
        //  \\ - barra inversa
        //  \t - Tabulação (TAB)
        //  \b, \f, \v - Backspace, Form Feed (passa a página), Tabulação Vertical. Mencionados apenas por contemplação de tudo. São pouco ou nada utilizados atualmente.

    //Como podes ver, todos os caracteres especiais começam com um caractere de barra inversa. Isso também é chamado de "caractere de escape (escape character)"

    //Por ser tão especial, se precisarmos realmente mostrar uma barra invertida dentro da string, precisamos dobrá-la:
        console.log(`A barra inversa: \\`); //A barra inversa: \

    //As aspas "escapadas" \', \", \` são usadas para inserir aspas dentro de strings com as mesmas aspas:
        console.log('Copo d\'água'); //Copo d'água

    //Como pode ver, temos que "fingir" a aspa pela barra inversa \', caso contrário indicaria o fim da string.

    //Claro que apenas as aspas que são iguas às que delimitam a string precisam ser "escapadas". Entrão como solução mais elegante, podemos simples mente mudar para aspas duplas:
        console.log("Copo d'água");

    //Além desses caracteres especiais, há também uma notação especial \u para códigos Unicode. É raramente usada e será abordada no capítulo opcional 'Unicode'.