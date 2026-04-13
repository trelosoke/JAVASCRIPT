'use strict';
//Procurando por uma sub-string
    //Há muitas maneiras de procurar por uma sub-string dentro de uma string.
        //str.indexOf()
            //O primeiro método é 'str.indexOf(subString, posição);

            //Ele procura pela 'subString' na 'str', começando da posição fornecida 'pos', e retorna a posição onde a combinação foi encontrada ou -1 se nada pôde ser encontrado:
                let str = 'Widget with id';

                console.log(str.indexOf('Widget')); //0, pois 'Widget' é encontrado no início
                console.log(str.indexOf('widget')); //-1, não encontrado, a pesquisa é sensível a capitalização

                console.log(str.indexOf('id')); //1, 'id' é encontrado na posição 1 (...'id'get with id)
                    //Cada caractere é uma posição. 

            //O segundo parâmetro (opcional) nos permite começar a pesquisa dada uma posição.
            //Por exemplo, a primeira ocorrência de 'id' está na posição 1. Para ver a próxima ocorrência, vamos começar a pesquisa da posição 2:
                str = 'Widget with id';
                console.log(str.indexOf('id', 2)); //12
            
                //Contando a partir da posição inicial 0 (como o que estamos contando são caracteres, o espaçamento também conta como um), a segunda ocorrência aparece na 12ª posição.

            //Se quisermos todas as ocorrências, podemos rodar o 'indexOf' em um loop. Cada nova chamada é feita com a posição após a combinação anterior:

                let str2 = 'As sly as a fox, as strong as an ox';

                let alvo = 'as'; //vamos procurar por isso

                let position = 0; 
                while(true) {
                    let foundPos = str2.indexOf(alvo, position);
                    if (foundPos == -1) break;

                    console.log(`Encontrado em: ${foundPos}`);
                    position = foundPos + 1; //continua a pesquisa pela próxima posição

                }

            //O mesmo algoritmo pode ser estruturado de forma mais curta:
                str2 = 'As sly as a fox, as strong as an ox';

                alvo = 'as'; //vamos procurar por isso

                position = 0;
                while((position = str2.indexOf(alvo, position + 1)) != -1) {
                    console.log(`Encontrado em: ${position}`);
                }
            
                        //str.lasIndexOf(subString, posição)
                            //Há também um método similar 'str.lasIndexOf(subString, posição)' que procura do final de uma string até o começo.
                            //Ele lista as ocorrências na ordem inversa.

            //Há uma ligeira incoveniência com 'indexOf' no teste 'if'. Não podemos colocá-lo no 'if' assim:
                str = "Widget with id";

                if (str.indexOf("Widget")) {
                    console.log("O encontramos!");
                }

            //O exemplo acima não funciona porque 'str.indexOf("Widget")' retorna 0 (dizendo que encontrou uma combinação nessa posição). Mas o 'if' considera 0 um valor falsy.

            //Então, na verdade deveríamos procurar por uma verificação de -1:
                str = "Widget with id";

                if (str.indexOf("Widget") != -1) { //se 'str.indexOf("Widget")' for diferente de -1
                    console.log("O encontramos!");
                }

        //includes, startsWith, endsWith
            //O método mais moderno 'str.includes(subString, posição)' retorna true/false dependendo se 'str' contém 'subString' dentro.
            //É a escolha correta caso precisemos testar pela combinação, mas não precisarmos da posição:
                console.log("Widget with id".includes("Widget")); //true

                console.log("Hello".includes("Bye")); //false

            //O segundo argumento (opcional) de 'str.includes' é a posição do início da pesquisa:
                console.log("Widget".includes("id")); //true
                console.log("Widget".includes("id", 3)); //false, da posição 3 não há "id"

            //Os métodos 'str.startsWith' e 'str.endsWith' fazem exatamente o que eles dizem:
                console.log("Widget".startsWith("Wid")); //true, "Widget" começa com "Wid"
                console.log("Widget".endsWith("get")); //true, "Widget" termina com "get"