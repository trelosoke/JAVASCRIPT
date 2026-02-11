'use strict';
//Referência e cópia de objetos
    //Uma das diferenças fundamentais de objetos contra primitivos é que os objetos sãi armazenados e copiados "por referência", enquanto os valores primitivos (strings, numbers, booleans, etc) são sempre copiados "como um valor inteiro".

    //Isso é fácil de entender se olharmos um pouco por baixo dos panos do que acontece quando copiamos um valor.
    //Vamos começar com um primitivo, como uma string. Aqui colocamos uma cópia de 'message' dentro de 'phrase'.
    let message = "Hello!";
    let phrase = message;

    //Como resultado temos duas variáveis independentes, casa uma guardando a string "Hello!".
    //Um resultado bem óbvio, mas objetos não funcionam assim.

    //Uma variável atribuída a um objeto armazena não o objeto em si, mas o seu "endereço na memória". Em outras palavras, "uma referência" a ele.
    //Vejamos um exemplo de tal variável:
    let user = {
        name: 'John',
    };

    //O objeto (ao lado direito de '=') é armazenado em algum lugar na memória , enquanto a variável "user" (ao lado esquerdo de '=') tem uma "referência" a ele.

    //Podemos pensar em uma variável de objeto, como user, como uma folha de papel com o endereço o objeto nela.
    //Quando performamos ações com o objeto, p.ex. obter a propriedade 'user.name', o motor (a engine) do JavaScript no que está naquele endereço e realiza a operação no objeto real.

    // ! -- Agora aqui está porque é tão importante: quando uma variável de objeto é copiada, a referência é copiada, mas o objeto em si NÃO É duplicado. Por exemplo:
    let admin = user; //Copia a referência ao objeto

    //Agora temos duas variáveis, cada uma referenciando o mesmo objeto.

    //Como podes ver, ainda há apenas um objeto, mas agora com duas variáveis o referenciando.
    //É possível utilizar cada variável para acessar o objeto e modificar seu conteúdo:
    admin.name = 'Pete'; //mudado pela referência 'admin'
    console.log(user.name); //'Pete', as mudanças são visualizadas da referência 'user'.

    //É como se tivéssemos um armário com duas chaves para abri-lo e usasse uma delas (admin) para abrir e fazer mudanças. Então, se posterior mente usássemos a outra chave (user), ainda abriria-mos o mesmo armário e podemos acessar os conteúdos alterados.