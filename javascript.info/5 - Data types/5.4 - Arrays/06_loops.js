'use strict';
//Loops
    //Um dos modos mais antigos de manter um ciclo com itens de array é o loop 'for' sobre índices:
        let array = ["Maçã", "Banana", "Pera"];

        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    
    //Mas para arrays, há outra forma de loops, 'for...of'
        let frutas = ["Maçã", "Banana", "Pera"];

        //itera sobre elementos de array
        for (let fruta of frutas) {
            console.log(fruta)
        }

    //O 'for...of' não dá acesso ao número do elemento atual, apenas seu valor, mas na maioria dos casos isso basta. E é menor.

    //Tecnicamente, porque arrays são objetos, também é possível usar 'for...in':
        array = ["Maçã", "Banana", "Pera"];

        for (let chave in array) {
            console.log(array[chave]);
        }

    //Mas isso na verdade é uma má ideia. Há potenciais problemas nesse uso:
        // 1. O loop 'for...in' itera sobre TODAS AS PROPRIEDADES, não apenas as numéricas.
            //Há os tal-chamados objetos "tipo array (array-like)" no navegador e em outros ambientes, que parecerem com arrays. Isso é, eles têm 'length' e propriedades indexadas, mas eles podem também ter outras propriedades não numéricas e métodos, que nós não normalmente precisamos. O loop 'for...in' irá listá-los, no entanto. Então se precisarmos trabalhar com objetos tipo array, então essas propriedades "extras" podem se tornar um problema.

        // 2. O loop 'for...in' é otimizado para objetos genericos, não arrays, e isso é 10 a 100 vezes mais lento. Claro, ainda é bem rápido. O ganho de velocidade pode importar apenas em gargalos (pontos que podem ser lentos ou travarem). Mas ainda sim devemos estar cientes da diferença.

    //De forma geral, não deveríamos usar o loop 'for...in' para arrays.