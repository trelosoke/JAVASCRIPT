"use strict";
//String
    //Uma string no JavaScript deve estar entre aspas:
    let str = 'string'; //Aspas únicas
    let str2 = "string 2"; //Aspas duplas
    let str3 = `string 3`; //Acentos graves ` também contam, mas fazem algo em particular.

    //As aspas duplas e únicas não têm praticamente nenhuma diferença prática. Já o acento grave tem "funcionalidade extendida". Elas nos permitem incorporar variáveis e expressões em uma string envolvendo-as em "${}". Por exemplo:
    let nome = 'João';

    console.log(`Olá, ${nome}!`); //Olá, João!

    console.log(`O resultado é ${2 + 3}`); //5

    //A expressão dentro de ${} é avaliada e o resultado se torna parte da string. Podemos chamar ${} de "string interpolation", pois insere valores dentre da estrutura string.

        //comentário
          //Não há um tipo apenas para caracteres.
            //Em algumas linguagens, há tipos de dados somente para caracteres isolados, como somente "a" ou "b". No JS, não existe. Uma string pode estar:
            let strVazia = " "; //vazia;
            let strLetra = " a "; //apenas com um caractere;
            let strMany = " Olá, como vai você? " //Vários caracteres