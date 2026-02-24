'use strict';
//Optional chaining (encadeamento opcional)
    //O optional chaining '?.' para a avaliação se o valor anterior ao '?.' for 'undefined' ou 'null' e retorna 'undefined'.
    //Mais para frente nesse artigo, iremos falar que algo "existe" se não for 'null' e não for 'undefined'.

    //Em outras palavras, 'valor?.prop':
        //Funciona como 'valor.prop' se 'valor' existe;
        //senão (quando 'valor' é 'undefined'/'null'), retorna 'undefined'

    //Aqui está a maneira segura de acessar 'user.address.street' usando '?.':
    let user = {};
    console.log(user?.address?.street); //'undefined', sem erro

    //O código é pequeno e limpo, não há duplicação

    //Ler o 'address' com 'user?.address' funciona mesmo se o objeto 'user' não existir:
    user = null;
    console.log(user?.address); //undefined

    //Por favor note: a sintaxe '?.' faz opcional o valor antes dela, mas não qualquer outro além desse.

    //P.ex. em 'user?.address.street.name', o '?.' permite 'user' ser 'null'/'undefined' de forma segura, mas somente para 'user'. Propriedades além são acessadas da forma comum. Para cada propriedade, devemos adicionar um opcional chaining que é o que queremos.
                
                //Não exagere no uso do opcional chaining
                    //Devemos utilizar '?.' apenas onde é ok que algo não exista.

                    //Por exemplo, se de acordo com nosso código objeto 'user' deve existir, mas 'address' é opcional, então deveriamos escrever 'user.address?.street', não 'user?.address?.street'.

                    //Então, caso 'user' seja 'undefined', veremos um erro de programação e concertaremos. Ao utilizar o optional chaining no user, é como se escondêssemos o erro, retornando somente undefined, mas o código continua fluindo. Deixa mais difícil de "debugar (depurar)".

                //A variável antes de '?.' deve estar declara
                    //Se não há variável para 'user', então 'user?.prop' desencadeia um erro:
                    user2?.address; //ReferenceError: user2 is not defined

                    //A variável deve estar declarada (p.ex. let/const/var user ou como parâmetro de função). O optional chaining funciona apenas para variáveis declaradas 