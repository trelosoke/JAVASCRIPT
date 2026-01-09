"use strict";
//  Por muito tempo, o JavaScript evoluiu sem problemas de compatibilidade. Isso acontecia devido a não retirada de funcionalidades antigas, ou a mudança delas.

//  Mesmo sendo útil para não quebrar sites feitos com código antigo, era nada efetivo para consertar erros desses mesmos códigos.

// Isso mudou a partir do lançamento do ECMAScript 5 (ES5), em 2009. Porém, para que os códigos antigos não "quebrassem", por padrão essas modificações não estavam implementadas, sendo necessário uma linha antes de todo o código para habilitar essas novas modificações: "use strict".

//"use strict";
    //Funciona como uma string, que determina o código como sendo do JS "moderno".
    //Futuramente no estudo de funções, veremos que é possível habilitar o modo estrito somente em uma função específica. Porém, o mais comum é usar no código inteiro.

//!! Utilize "use strict" somente no topo !!
    //Caso haja alguma outra declaração antes de "use strict", ele não habilitará.
    //A única coisa que pode vir antes são comentários. Mesmo assim, não é recomendado.

//Uma vez ligado, sempre ligado
    //Não é possível desativar o modo estrito no meio do código. Ou ele todo é, ou não é.

//Console do Navegador
    //No console de desenvolvedor dos navegadores, muitas vezes o "use strict" não vem por padrão. Para habilitá-lo, basta dar "Shift + Enter" para uma nova linha e colocar o "use strict" no topo do código.
    //Caso seu navegador seja bem antigo e não funcione somente colocando essa linha, há uma maneira (bem feia) de fazer isso também:
    /*
        (function() {
        'use strict';

            // ...seu código INTEIRO aqui...
        })() 
    */

//É para usar ou não?
    //Por agora, nesse início de estudo, sempre colocar o modo estrito no topo do código é sempre necessário. Mais para frente, iremos aprender sobre classes e módulos, os quais habilitam automaticamente esse modo, o que fará com que não precisemos do "use strict" no topo.

//Exemplo de uso do modo estrito:
a = 20; //Variável "a" que não foi declarada (var, let, const)
console.log(a); //No modo estrito, variáveis não declaradas não funcionam.

let x = 10; //Variável declarada
console.log(x); //Retorna o valor atribuído à variável: 10.