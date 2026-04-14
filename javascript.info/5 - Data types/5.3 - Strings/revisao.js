'use strict';
// 1. Aspas (Quotes)
// Crie uma variável nome com seu nome e uma variável idade com sua idade. Use um template literal para exibir: "Olá, meu nome é [nome] e tenho [idade] anos."
    let nome = "Treloso";
    let idade = 30;

    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// 2. Caracteres especiais
// Crie uma string que, ao ser exibida com console.log, mostre exatamente isso:
// Linha 1
// 	Linha 2 com "aspas" e uma barra: \

    console.log(`Linha 1
    Linha 2 com "aspas" e uma barra: \\`);

    console.log("Linha 1\n" + 
        "    Linha 2 com \"aspas\" e uma barra: \\");

// 3. Comprimento da string
// Dada a string "   olá mundo   ", exiba o comprimento dela antes e depois de remover os espaços das bordas.

    let str = "   olá mundo   ";

    console.log(str.length);

    str = "olá mundo";

    console.log(str.length);

// 4. Acessando caracteres
// Dada a string "javascript", acesse e exiba o primeiro e o último caractere das duas formas possíveis ([] e .at()).

    let strJS = "javascript";

    //primeiro caractere
    console.log(strJS[0]); //Array
    console.log(strJS.at(0)); //Método

    //último caractere
    console.log(strJS[strJS.length - 1]); //Array
    console.log(strJS.at(-1)); //Método

// 5. Strings são imutáveis
// Tente modificar o primeiro caractere de "banana" diretamente pelo índice. O que acontece? Agora faça isso funcionar do jeito certo.

    let strBanana = "banana";

    //strBanana[1] = 'á'; //erro

    strBanana = strBanana[0] + 'á' + strBanana.slice(2);
    console.log(strBanana);

// 6. Mudando capitalização
// Receba a string "jAvAsCrIpT" e exiba-a toda em minúsculas e toda em maiúsculas.

    let strJaSc = 'jAvAsCrIpT'; 

    //minúsculas
    console.log(strJaSc.toLowerCase());

    //maiúsculas
    console.log(strJaSc.toUpperCase());

// 7. Procurando uma substring
// Dada a string "o rato roeu a roupa do rei de roma", use todos os métodos de busca disponíveis: encontre a posição da primeira e da última ocorrência de "ro", verifique se "roupa" existe na string, e confirme com o que ela começa e com o que ela termina.

    let strRato = "o rato roeu a roupa do rei de roma";

    //primeira ocorrência de 'ro'
    console.log(strRato.indexOf("ro")); //posição 7

    //última ocorrência de 'ro'
    console.log(strRato.lastIndexOf("ro")); //posição 30

    //verificação de existência de "roupa"
    console.log(strRato.includes("roupa")); //true

    //começa com
    console.log(strRato.startsWith("o")); //true

    //termina com
    console.log(strRato.endsWith("roma")); //true

// 8. Obtendo uma substring
// Dada a string "Programação em JavaScript", extraia apenas "JavaScript" usando .slice(), .substring() e .substr(), e anote a diferença de comportamento entre eles.

    let strProg = "Programação em JavaScript";

    //com .slice
    console.log(strProg.slice(15));
    console.log(strProg.slice(strProg.indexOf("J")));

    //com .substring
    console.log(strProg.substring(15, 25));
    console.log(strProg.substring(25, 15));
    console.log(strProg.substring(strProg.indexOf("J")));

    //com .substr (quase morto)
    console.log(strProg.substr(15, 10));


// 9. Comparando strings
// Qual a diferença entre comparar strings com > diretamente e usar .localeCompare()? Quando cada abordagem pode te prejudicar?

    //Usar diretamente com > demanda conhecimento do código Unicode dos caracteres. Não segue uma ordem que parece lógica para o ser humano, já que uma letra minúscula pode ser "maior" que uma letra maiúscula. 

    //Já .localeCompare() usa regras de algum idioma específico para declarar se alfabeticamente o caractere/palavra é maior ou não. Caso o locale não seja especificado, irá depender totalmente to ambiente fazer essa dedução. Isso pode causar algumas variações no resultado, já que cada ambiente adapta isso de formas diferente. 

// 10. Unicode e surrogate pairs
// Por que "😀".length retorna 2 em vez de 1? O que são surrogate pairs?
    //Pois o uso padrão de UTF-16 no JS faz com que esses caracteres mais complexos utilizem mais um bloco de 16 bits (2 bytes) para poder ser trabalhado com. Por isso considera-se ser 2 caracteres.