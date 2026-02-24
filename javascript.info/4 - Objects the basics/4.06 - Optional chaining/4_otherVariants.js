'use strict';
//Outras variantes: '?.()', '?.[]'
    //O optional chaining não é um operador, mas uma construção santática especial, que também funciona com funções e colchetes.
    //Por exemplo, '?.()' é usado para chamar uma função que não existe. No exemplo abaixo, alguns dos nossos usuários têm o método 'admin', outros não:
    let userAdmin = {
        admin() {
            console.log("Sou um admin");
        }
    };

    let userGuest = {};

    userAdmin.admin?.(); //Sou um admin
    userGuest.admin?.(); //nada acontece (não há esse método)

    //Aqui, em ambas as linhas primeiro usamos o ponto (userAdmin.admin) para chegar na propriedade 'admin', pois assumimos que o objeto "userAdmin" existe, então é seguro ler a partir dele.

    //Então '?.()' verifica a parte esquerda: se a função 'admin' existe, então ela é executada. Senão, a avaliação para sem erros.

    //A sintaxe '?.[]' também funciona, se quisermos utilizar os colchetes para acessar as propriedades ao invés do ponto. Similar aos casos anteriores, ele permite que se leia uma propriedade que pode não existir.

    let key = "firstName";

    let user1 = {
        firstName: 'John',
    };

    let user2 = null;

    console.log(user1?.[key]); //John
    console.log(user2?.[key]); //undefined


    //Podemos também utilizá-lo com delete:
    delete user?.name; //deleta 'user.name' se user existir

                //'?.' para leitura segura e remoção, mas não escrita
                    //O optional chaining '?.' não têm uso no lado esquerdo de uma atribuição (=):
                    let user3 = null;
                    
                    user3?.name = "John"; //Erro, não funciona
                    //Isso é avaliado como 'undefined = "John"'