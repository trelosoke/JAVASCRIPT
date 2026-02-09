'use strict';
//Colchetes (square brackets)
    //Para propriedades com mais de uma palavra em seus nomes, o acesso pelo ponto não funciona.

    //Isso resultaria em erro:
        //user.likes birds = true;
    
    //JavaScript não entende isso. Ele interpreta que nós endereçamos 'user.like' e retorna um erro de sintaxe quando passa por 'birds'.
    //O "ponto" necessita que a chave seja um identificador de variável válido. Isso implica em: não conter espaços, não começar com um dígito e não incluir caracteres especiais (exceto $ e _).

    //Há uma alternativa "notação de colchete" que funciona com qualquer string:
    let user = {};

    //definir
    user["like birds"] = true;

    //obter
    console.log(user["like birds"]);

    //deletar
    delete user["like birds"];

    //Por favor note que a string dentro dos colchetes está devidamente entre aspas (qualquer tipo de aspas serve).

    //Colchetes também provêm uma maneira de obter o nome de uma propriedade como o resultado de qualquer expressão, em oposição a uma string literal, como de uma variável da seguinte forma:
    let key = "like birds";

    //O mesmo que 'user["like birds"] = true;'
    user[key] = true;

    //Aqui, a variável "key" é calculada no momento da execução ou depende o input do usuário. E então a usamos para acessar a propriedade. Isso nos dá uma boa margem de flexibilidade. Por exemplo:
    let user2 = {
        name: 'John',
        age: 30,
    };

    let key2 = 'name';

    //Acesso pela variável
    console.log(user2[key2]);

    // !-- A notação de ponto não pode ser utilizada de forma similar:
    console.log(user2.key2); //undefined

//Propriedades computadas
    //Podemos usar colchetes em um objeto literal, quando estamos criando um objeto. Isso chama-se "propriedades computadas (computed properties)". Por exemplo:
    let fruit = 'abacate';

    let bag = {
        [fruit]: 5,  //O nome da propriedade é obtida da variável 'fruit'
    };

    console.log(bag.abacate); //5 se fruit='abacate';

    //O significado de uma propriedade computada é simples: [fruit] quer dizer que o nome da propriedade deve ser obtido de 'fruit'.
    //Então, se um visitante enviar "abacate", 'bag' se tornará {abacate: 5}.

    //Essencialmente, funciona assim como:
    
    let fruta = 'banana';
    let bolsa = {};
        //Obtém o nome da pripriedade da variável 'fruta'
    bolsa[fruta] = 5;

    //Mas é um pouco melhor.

    //Podemos utilizar expressões mais complexas dentro dos colchetes:
    let fruit2 = 'apple';
    let bag2 = {
        [fruit + 'Computers']: 5 //bag.appleComputers = 5;
    };

    //Colchetes são bem mais poderosos que a notação de ponto (dot notation). Eles permitem quaisquer nomes de propriedades e variáveis. Mas são mais trabalhosos de escrever.
    //Então na maioria do tempo, quando os nomes das propriedes são conhecidos e simples, o "ponto" é usado. E se precisarmos de algo mais complexo, então troque para colchetes.