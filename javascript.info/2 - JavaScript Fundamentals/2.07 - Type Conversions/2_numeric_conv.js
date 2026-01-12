'use strict';
//Conversões para números ocorrem de maneira automática em funções e expressões matemáticas:
console.log( "6" / "2" );

//Podemos usar Number(valor) para converter
let str = "123";
console.log(typeof str);

str = Number(str);
console.log(typeof str);
//Normalmente usado quando lemos um valor de uma fonte baseada em string, como um texto, mas esperamos que seja inserido.

//Se a string não for um número, dará "NaN"
let idade = Number('uma string arbitrária ao invés de um número');
console.log(idade);

//Regras:
    // 1. "undefined" retorna "NaN":
    console.log(Number(undefined));
    // 2. "null" retorna "0"
    console.log(Number(null));
    // 3. "true" e "false" retornam "1" e "0"
    console.log(Number(true));
    console.log(Number(false));
    // 4. "string": Espaços em branco (incluindo espaços, tabulações(tabs, \t), novas linhas (\n), etc), do início ao fim, são removidos. Se a string estiver vazia, retorna 0. Caso há erro, retorna "NaN". Ademais, o número é "lido" da string.
    console.log(Number("    123    "));
    console.log(Number("123a")); //Erro, NaN