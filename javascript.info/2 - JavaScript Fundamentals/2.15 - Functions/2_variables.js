'use strict';
//Variáveis
    //Variáveis locais
        //Uma variável declarada dentro de uma função é somente visível dentro da própria função:
        function mostarMensg() {
            let mensagem = 'Olá, eu sou o JavaScript!';

            console.log(mensagem);
        }

        mostarMensg(); //Executa a função normalmente
        // console.log(mensagem); --> Erro - A variável é local para a função. Ela não está definida.

    //Variáveis externas
        //Uma função pode acessar uma variável externa também, por exemplo:
        let userName = 'John';

        function mostrarMensagem() {
            let mensagem = 'Olá, ' + userName;
            console.log(mensagem);
        }

        mostrarMensagem(); //Olá, John

        //A função tem total acesso a variável externa. Também pode modificá-la:
        let user = 'Dog';

        function mostrarMensagem2 () {
            user = "Cachorro"; //Modificou a variável externa

            let mensagem = 'Olá, ' + user;
            console.log(mensagem);
        }

        console.log(user); //Dog, antes da chamada da função
        mostrarMensagem2(); 
        console.log(user); //Cachorro, depois da chamada da função

        //A variável externa só é utilizada caso não haja uma local de mesmo nome. Caso duas variáveis com o mesmo nome, mas uma local e outra externa, a prioridade é da local. A externa é ignorada.

        let user2 = 'John';

        function showMessage() {
        let user2 = "Bob"; // declara (identificando) uma variável local

        let mensagem = 'Olá, ' + user2; // Bob
        console.log(mensagem);
        }

        //A função vai criar e mostrar o seu próprio "user2"
        showMessage();

        console.log(userName); //John. A função não mudou nada da variável externa.

                //Variáveis globais
                    //Variáveis declaradas fora de qualquer função, tais como a externa "user2" no código acima, são chamadas de variáveis globais.
                    //Elas são visíveis de qualquer função (com excessão do exemplo acima)
                    //É uma boa prática diminuir o uso de variáveis globais. Código moderno tem poucas ou nenhuma globais. A maioria das variáveis residem em suas funções. Algumas vezes, entretanto, elas podem ser úteis para armazenar dados "project-level (nível de projeto)". 