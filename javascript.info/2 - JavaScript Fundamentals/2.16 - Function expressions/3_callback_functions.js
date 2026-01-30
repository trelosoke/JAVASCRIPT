'use strict';
//Funções 'Callback' ou de resposta
    //Vamos dar uma olhada em mais exemplos de passar funções como valores e usar expressão de função.

    //Escreveremos uma função 'perguntar(pergunta, sim, nao)' com três parâmetros:

    // - pergunta: Texto da pergunta
    // - sim: função a executar caso a resposta seja "Sim'
    // - nao: função a exevutar caso a resposta seja "Não'

    //A função deve fazer a pergunta e, dependendo da resposta do usuário, chamar sim() ou nao().

    function perguntar(pergunta, sim, nao) {
        if(confirm(pergunta)) sim()
        else nao();
    }

    function exibirOk() {
        alert("Você concordou.");
    }

    function exibirCancelar() {
        alert("Você cancelou a execução");
    }

    //uso: as funções 'exibirOk' e 'exibirCancelar' são passadas como argumento (valor do parâmetro) de 'perguntar':
    perguntar("Você concorda?", exibirOk, exibirCancelar);

    //Na prática, tais funções são muito úteis. A principal diferença entre um 'perguntar' na vida real (na programação REAL de sites) e o exemplo acima é que funções da vida real usam maneiras mais complexas de interagir com o usuário do que um simples 'confirm'. No navegador, tais funções normalmente 'desenham' uma janela de pergunta mais atraente, bonita. Mas isso é outra história.

    //Os argumentos 'exibirOk' e 'exibirCancelar' de 'perguntar' são chamados de funções 'callback' ou só 'callbacks'. Em português seria mais ou menos funções de resposta, mas vamos com os termos em inglês. O importante é entender como ela funciona.

    //A ideia é que passemos uma função e as esperemos serem "chamadas de volta (called back)" depois se for necessário. Em nosso caso, exibirOk torna-se o 'callback' do parâmetro 'sim', e exibirCancelar do parâmetro 'não'.

    //Podemos usar Expressões de Função para escrever uma função curta equivalente:
    function ask(question, yes, no) {
        if(confirm(question)) yes()
        else no();
    }

    ask(
        "Do you agree?", //parâmetro 1, question
        function() { alert("You agreed."); }, //parâmetro 2, yes
        function() { alert( "You canceled the execution"); } //parâmetro 3, no
    ); 
    //Aqui, funções são declaradas dentro da chamada 'ask'. Elas não têm nome, e então são chamadas de 'anônimas'.
    //Tais funções não são acessíveis fora de 'ask' (pois não são atribuídas a variáveis), mas é isso que queríamos aqui.

    //Tal código aparece em nossos scripts bem naturalmente, está no espírito do JavaScript.

                //Uma função é um valor representando uma "ação"
                    //Valores regulares como strings ou numbers representam dados.
                    //Uma função pode ser percebida como uma ação
                    //Podemos passar entre variáveis e executar quando quisermos, como vimos até agora.