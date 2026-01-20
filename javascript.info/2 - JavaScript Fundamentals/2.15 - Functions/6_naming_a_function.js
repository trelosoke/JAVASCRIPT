'use strict';
//Nomeando uma função
    //Funções são ações. Então seus nomes são normalmente um verbo. Deve ser breve, o mais preciso possível e descrever o que a função faz, para que alguém que esteja lendo o código obtenha uma indicação do que a função faz.

    //É um prática difundida começar uma função com um prefixo verbal que descreve vagamente a ação. Deve haver um acordo dentro da equipe no significado dos prefixos.

    //Por exemplo, funções que começam com 'show (mostrar)' normalmente mostram alguma coisa.
    //Funções começando com:
    //'get(obter)' - retorna um valor
    //'calc' - calcula algo
    //'create(criar)' - cria algo
    //'check(checar)' - verifica algo

    //Exemplos:
    //mostrarMensagem();
    //obterIdade();
    //calcSoma();
    //criarFormulario();
    //checarPermissao();

    //Com os prefixos no lugar, uma olhada no nome de uma função fornece um entendimento de qual tipo de trabalho faz e que tipo de valor retorna.

                //Uma função, uma ação
                    //Uma função deve fazer exatamente o que é sugerido por seu nome, nada mais.
                    //Duas ações independentes normalmente pedem duas funções, mesmo se elas são geralmente chamadas juntas (nesse caso, podemos fazer uma terceira função que chame ambas).

                    //Alguns exemplos de quebra dessa regra:

                    // - obterIdade(); - Seria ruim se ela também mostrasse a idade (deveria só obter);

                    // - mostrarIdade(); - Seria ruim se ela também obtesse o valor da idade (deveria só mostrar);

                    // - criarFormulario(); - Seria ruim se modificasse um documento, adicionando-no um formulário (deveria só criá-lo e retorná-lo);

                    // - checarPermissao(); - Seria ruim se mostrasse a mensagem de "acesso permitido/negado" (deveria só verificar a permissão e retornar o resultado).

                    //Esses exemplos assumen significados comuns de prefixos. Você e seu time são livre para concordar com outros prefixos, mas eles não serão muito diferentes desses. Em qualquer caso, deve-se haver uma compreensão do que significa um prefixo, o que uma função com prefixo pode ou não fazer. Todas as funções de mesmo prefixo devem obedecer as regras e o time deve compartilhar o conhecimento.

                //Nomes MUITO pequenos de funções
                    //Funções que são usadas frequentemente algumas vezes têm nomes muito pequenos.
                    //Por exemplo, o framework 'jQuery' define uma função com '$'. A biblioteca 'Lodash' tem sua função nuclear nomeada '_'.
                    //Essas são excessões. Geralmente nomes de funções devem ser concisas e descritivas.