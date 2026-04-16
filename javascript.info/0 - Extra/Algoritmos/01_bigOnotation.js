'use strict';
//O que é uma notação Big O?
    //É uma notação usada para saber o quão eficiente é o seu algoritmo, especialmente e temporalmente, sendo que "notação" é uma forma concisa e padronizada de descrever algo muito longo de explicar.
        //"Esse algoritmo é Big O de n";
        //"Tal algoritmo é O(2)";

        //Esse tipo de frase leva em consideração o pior caso possível daquele algoritmo. Ou seja, o tempo máximo de execução que determinado trecho de código precisa para executar totalmente.

        //Esse tempo é relativo, pois depende de hardware, tarefas atuais na memória, etc. Ele não vai medir uma comparação de "melhor" ou "pior" algoritmo.

    //O Big O dará a média de tempo e espaço que o algoritmo cresce, podendo crescer de forma:
        // 1. Constante    = O(1)
        // 2. Logarítma    = O(log n)
        // 3. Exponencial  = O(2^n)
        // 4. Quadrática   = O(n^2)
        // 5. Linear       = O(n)
        // 6. Linearítmica = O(n log n)
        // 7. Fatorial     = O(n!)

    //Esse crecimento é de acordo com a entrada recebida nesse algoritmo. Exemplo de código:

        //Função que printa o primeiro elemento de uma lista:

            function showFirst(items = []) {
                console.log(items[0]);
            }

            showFirst(["Lucas", "Montano"]); //Lucas

        //Qual o Big O notation disso?
            //Big O(1) - Constante
                //Independente do array que é passado, como estamos acessando apenas o primeiro elemento daquela lista ('items[0]'), o algoritmo cresce de forma constante.

        //Mesma função, mas adicionada de printar cada item:
            
            function showFirstEl(items = []) {
                console.log(items[0]);  //Big O(1)

                for (let item of items) {    //!-- Big O(n)
                    console.log(item);  //Big O(1)
                }
            }

            showFirstEl(["Lucas", "Montano"]); //Lucas, "Lucas, Montano (novo loop)"

            //Nesse caso, o for é Big O(n) - Linear
                //O 'n' é a quantidade de itens. Esse algoritmo cresce linearmente. Vai crescer até 'n'.

            //Mas por que a função toda é Big O(n) se também tem Big O(1)?
                //A notação vai sempre utilizar a maior notação dentro da função para representá-la.
                //Logo, o Big O dessa função em tempo, é O(n);

        //Mesma função, mas percorre a lista de trás para frente:
            
            function showFirstElem(items = []) {
                console.log(items[0]);  //Big O(1)

                for (let item of items) {    //Big O(n)
                    console.log(item);  //Big O(1)
                }

                for (let i = items.length - 1; i >= 0; i--) {   //!-- Big O(n)
                    console.log(items[i]);
                }
            }

            showFirstElem(["Lucas", "Montano"]); //Lucas, Lucas, Montano, "Montano, Lucas (novo loop)"

            //Continua sendo Big O(n)
                //Continua iterando linearmente, somente de forma reversa.

            //Mas por que ter 2 Big O(n) não faria essa função ser "2 * O(n)"? 
                //Pois O(n) já representa esse comportamento linear. Sempre é usada uma constante. 
                    // 2 * O(n)
                    // 2 * um array de 2 = 4
                    // 2 * um array de 10 = 20
                    // 2 * um array de 100 = 200

                //Continua sendo um crescimento linear. O fato de haver dois 'for' na função (não estando aninhados) não muda esse fato.
            
            //Função que percorre elementos de uma matriz e diz se determinado elemento existe nela:

            function findElement(matrix, target) {
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] === target) {
                            return true;
                        }
                    }
                }

                return false;
            }

            let matrix = [
                [1, 2, 3], 
                [4, 5 ,6], 
                [7, 8, 9],
            ];
            let target = 42;

            let resultado = findElement(matrix, target);
            console.log(`O elemento ${target} foi encontrado na matriz? ${resultado}`);

            //Complexidade é O(Linhas * Colunas)
                //No pior caso, terá que percorrer todas as linhas e todas as colunas.
                //Podemos dizer que ela também cresce linearmente. Poderiamos dizer que ela é O(n), onde 'n' é a quantidade de células/posições na matriz.

                //Ou, como essa matriz tem a mesma quantidade de linhas e de colunas, podemos dizer que ela é quadrática, considerando que 'n' é a quantidade de linhas ou de colunas. Assim, teríamos O(n^2).

                //Na prática, ambos dariam o mesmo resultado. Porém, devemos sempre avaliar o que estamos levando em consideração a dimensão da entrada (n).

                //No final, depende do que chamamos de 'n'.

    //Árvore binária
        //Conhecimento importante para o entendimento de Big O

        //É uma estrutura de dados que têm "nós" raízes e cada nó raiz tem dois "filhos", o da esquerda e o da direita. Os filhos também podem ter esquerda e direira. Cada filho pode ter, no máximo, dois filhos (left e right).

            //Um nó pode ter 0 filhos (nó folha, ou seja, left e right são undefined)
            //Um nó pode ter 1 filho (apenas left ou apenas right)
            //Um nó pode ter 2 filhos (ambos left e right existem)

            //Ele não pode exceder isso.

            //Árvores binárias garantem a base 2.

        //A busca binária é feita dividindo repetidamente a matriz ao meio. Quando se está buscando um item na árvore binária e ela estiver ordenada, verifica-se se o item de busca é maior ou menor que o elemento atual da árvore. Se for menor, irá para o lado esquerdo, se for maior, vai para o direito. 

        //Então não se percorre toda a árvore,sempre é cortado o resto da árvore ao meio. Isso seria um crecimento LOGARÍTMICO. Ou seja: Big O(log n).

        //Como esse tempo cresce logaritcamente, conforme o tamanho da entrada, essa busca é muito eficiente para quando se mexe com um grande conjunto de dados.

        //!-- Para aprofundamento de árvore binária, vá para '02_binaryTree.js'

    //Curiosidades
        //O "O" em Big O significa "Ordem de". Significa que queremos saber a Ordem de crescimento de um algoritmo.

        //Na prática, o Big O não considera constantes. Ou seja, dois for separados são O(n). Mas sabemos que dois 'for' devem ser considerados.

        //Também temos que pensar no melhor caso. Quando optar por determinado algoritmo. Isso depende do tamanho dos dados e como aquele algoritmo se comporta no pior e melhor caso.