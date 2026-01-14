'use strict';
//Nullish coalescing operator (??)
        //! - Isso é uma adição recente à linguagem. Navegadores antigos podem necessitar de "polyfills" (mostrado mais para fremte).
        //Coalescência: junção, fusão de elementosque estavam separados. No JavaScript, junção de valores

    //O operador de coalescência nula (nullish coalescing operator) é escrito como dois pontos de interrogação '??'.

    //Como ele trata null e undefined com similaridade, nesse artigo será usado um termo especial. Por brevidade, diremos que um valor é "definido" caso não seja 'null' nem 'undefined'.

    //O resultado de 'a ?? b' é:
        // - Se 'a' é definido, então 'a';
        // = Se 'a' não é definido, então 'b';

    //Em outras palavras, '??' retorna o primeiro argumento se não for null/undefined. Caso contrário, retorna o segundo.

    //O nullsh coalescing operator não é algo completamente novo. É só uma boa sintaxe para obter o primeiro valor "definido" de dois.

    //Podemos reescrever 'result = a ?? b' usando os operadores que já conhecemos, como esse:
    let result;
    let a = null,
        b = 1;

    result = (a !== null && a !== undefined) ? a : b; //'a' é diferente, por valor e tipo, de null E 'a' é diferente, por valor e tipo, de undefined? Se isso se provar verdadeiro (true), retorna a. Caso não, retorna b.
    console.log(result);
    result = a ?? b; //O mesmo de cima, mas menor
    console.log(result);

//Principal uso
    //O uso mais comum desse operador é prover um valor 'default' (padrão).

    //Por exemplo, aqui mostramos 'user' caso seu falor não seja null/undefined. Caso contrário, 'Anonymous':
    let user = null;
    console.log(user ?? 'Anonymous');

    user = 'careca123';
    console.log(user ?? 'Anonymous');

    //Também podemos usar uma sequência de '??' para selecionar o primeiro valor de uma lista que não é null/undefined.

    //Vamos dizer que temos os dados de um usuário nas variáveis 'nomePrimeiro', 'nomeUltimo' ou 'nickName'. Todas elas não devem estar definidas, caso o usuário decida não responder os valores correspondentes.

    //Gostariamos de mostrar o nome de usuário usando uma dessas variáveis, ou mostrar 'Anônimo' se todas forem null/undefined.

    //Vamos usar o operador '??' para isso:
    let nomePrimeiro = null;
    let nomeUltimo = null;
    let nickName = 'Supercoder';

    console.log(nomePrimeiro ?? nomeUltimo ?? nickName ?? 'Anônimo'); //Supercoder.

    //Mostra o primeiro valor definido.