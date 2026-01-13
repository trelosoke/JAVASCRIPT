'use strict';
//Para ver se uma string é maior que outra, é usado uma ordem "dicionário" ou "lexicográfica". Ou seja, é comparada letra por letra:

console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');
console.log('Bola' > 'Balão'); //(*) true

//A comparação é feita letra por letra, sendo analisado se o código Unicode de cada letra é igual, menor ou maior. Ao encontrar que "o" é maior que "a" na linha (*), toda string se torna maior que a outra string, resultando em verdadeiro. caso todos os caracteres fossem iguais, um seria maior que o outro em relação ao tamanho da palavra.
//Lista dos códigos unicode: https://en.wikipedia.org/wiki/List_of_Unicode_characters

//P.S.: as letras minúsculas têm unicode maior que as maiúsculas. Por isso, se eu fizesse essa afirmação:
console.log('Bola' > 'balão'); //Resultaria em "false"

//É parecido com a ordem do alfabeto, mas um pouco diferente. Será aprofundado mais para frente.

    //P.S.: caso um dos operandos fosse number ou de algum outro tipo, haveria conversão para number. Mas quando se trabalha somente com strings, funciona como no processo descrito acima.
    //Exemplo:
    console.log("2" > 12); //false 
    console.log("2" > "12"); //true - compara se o unicode de 2 é maior que 1