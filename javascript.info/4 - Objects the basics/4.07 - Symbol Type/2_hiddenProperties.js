'use strict';
//Propriedades "escondidas"
    //'Symbols' nos permitem criar propriedades de um objeto "escondidas", que nenhuma outra parte do código pode acidentalmente acessar ou sobrescrever.

    //Por exemplo, se estamos trabalhando com objetos 'user', que pertence a um código de terceiros.

    //Vamos usar um 'symbol key' para isso:
    let user = {
        name: 'John',
    };

    let id = Symbol("id");

    user[id] = 1; //Acesso à variável 'id'

    console.log(user[id]); //Podemos acessar dados utilizando o 'symbol' como uma chave


    //Qual o benefício de utilizar 'Symbol("id")' em vez de uma string "id"?
        //Como os objetos 'user' pertencem a outra base de código, não é seguro adicionar campos a eles, já que podemos afetar comportamentos pré-definidos naquela base de código. 
            // Objeto que veio da biblioteca externa
            let user2 = { 
                name: "João",
                id: "BIBLIOTECA_ID_99" // A biblioteca já usa o campo "id"!
            };

            // Se VOCÊ tentar guardar o SEU id usando string:
            user2.id = "MEU_ID_PESSOAL";

            //Se VOCÊ tentar criar outra propriedade com seu ID:
            user2.meuIdPrivado = "MEU_ID_PESSOAL";
            console.log(user2); //Aparece visível dentro do objeto
                    //Isso não é bom, visto que outros programadores podem tentar copiar esse objeto e adquirir tbm a mesma propriedade. Tirando também o fato de que podem sobrescrevê-lo.
        
        // No entanto, 'symbols' não podem ser acessados acidentalmente. O "código de terceiros" não estará ciente de símbolos recém-definidos, então é seguro adicionar 'symbols' para os objetos 'user':
            let user3 = {
                name: "Maria",
                id: "BIBLIOTECA_002",
            };

            let meuIdPrivado = Symbol("id"); //Não exister outro igual

            user3[meuIdPrivado] = "MEU_ID_PRIVADO"; //Define a variável com o symbol como propriedade, atribuindo um valor a ela

            console.log(user3.id); //BIBLIOTECA_002
            console.log(user3[meuIdPrivado]); //MEU_ID_PRIVADO
            console.log(user3); //Mostra o symbol como propriedade: '[Symbol(id)]: 'MEU_ID_PRIVADO''

    //Imagine também que outro script queira ter o seu próprio "identificador" dentro de 'user', para seus próprios propósitos. Então esse script pode criar seu próprio Symbol("id"), como o seguinte:
    let id2 = Symbol("id");

    user[id2] = "O valor id deles";

    //Não haverá conflito entre o nosso identificador e o deles, pois 'symbols' são sempre diferentes, mesmo tendo o mesmo nome.

    //Mas se utilizassemos uma string "id" ao invés de um 'symbol' para o mesmo propósito, então haveria conflito:
        let user4 = { name: "John" };

        //Nosso script usa a propriedade "id"
        user4.id = "Nosso valor id";
        
        //...Outro script também quer "id" para seus propósitos...

        user4.id = "O valor id deles";
        //Boom! Sobrescrito por outro script!

        