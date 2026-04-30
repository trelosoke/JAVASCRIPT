'use strict';
//Adicionar/remover itens
    //Já sabemos métodos que adicionam e removem itens do começo ao final:
    // .push(...itens) - adiciona itens ao final do array
    // .pop() - extrai um item do final do array
    // .shift() - extrai um item do começo do array
    // .unshift(...itens) - adiciona itens ao começo do array

    //Aqui estão alguns outros:
        //splice
            //Como deletar um elemento do array?

            //Arrays são objetos, então podemos tentar usar 'delete':
                let arr = ["I", "go", "home"];

                delete arr[1]; //remove "go"

                console.log(arr[1]); //undefined

                //agora arr = ["I", , "home"];
                console.log(arr.length); //3

            //O elemento foi removido, mas o array continua tendo 3 elementos.

            //Isso é natural, pois 'delete obj.chave' remove um valor pela 'chave', não deletando a propriedade em si. Isso é tudo que faz. Ótimo para objetos. Mas para arrays nós normalmente queremos que o resto dos elementos se desloque e ocupe o lugar vago. Esperamos ter um array menor agora.

            //Então, métodos especiais devem ser usados.

            //O método '.splice' é muito versátil para arrays, um "pau para toda obra". Pode fazer tudo: inserir, remover e substituir elementos.

            //A sintaxe é:
                arr.splice(/*start[, númeroDeElementosADeletar, elem1, ..., elemN]*/);

            //Ele modifica 'arr' como meçando pelo índice 'start': remove 'deleteCount' elementos e então insere 'elem1, ..., elemN' em seus lugares. Retorna o array dos elementos removidos.

            //Esse método é fácil de entender com exemplos. Vamos começar com a remoção:

                arr = ["I", "study", "JavaScript"];

                arr.splice(1, 1); //a partir do índice 1, remove 1 elemento

                console.log(arr); //[ 'I', 'JavaScript' ]
                
            //Fácil, certo? Começando do índice '1', removeu '1' elemento.

            //No próximo exemplo, removemos 3 elementos e os substituímos por outros 2:
                arr = ["I", "study", "JavaScript", "right", "now"];

                //remove os 3 primeiros elementos e os substitui por 2 outros
                arr.splice(0, 3, "let's", "dance");

                console.log(arr); //[ "let's", 'dance', 'right', 'now' ]

            //Aqui podemos ver que 'splice' retorna o array dos elementos removidos:

                arr = ["I", "study", "JavaScript", "right", "now"];

                //remove os 2 primeiros elementos e então os exibe no console
                console.log(arr.splice(0, 2)); //[ 'I', 'study' ] <-- array dos elementos removidos

            //O método 'splice' também é capaz de de inserir elementos sem qualquer remoção. Para isso, precisamos definir 'deleteCount' como '0':
                arr = ["I", "study", "JavaScript"];

                //do índice 2
                //deleta 0
                //então insere "complex" e "language"
                arr.splice(2, 0, "complex", "language");

                console.log(arr);[ 'I', 'study', 'complex', 'language', 'JavaScript' ];


                    //Índices negativos permitidos
                        //Aqui e em outros métodos de array, índices negativos são permitidos. Eles especificam a posição pelo final do array:
                            arr = [1, 2, 5];

                            //do índice -1 (um passo a partir do final)
                            //deleta 0 elementos
                            //então insere 3 e 4
                            arr.splice(-1, 0, 3, 4);

                            //é como se ele "empurasse" o último elemento para a direita para adicionar
                            console.log(arr); //[ 1, 2, 3, 4, 5 ]