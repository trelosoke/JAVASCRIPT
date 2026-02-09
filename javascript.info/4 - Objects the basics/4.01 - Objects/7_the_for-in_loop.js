'use strict';
//O loop "for...in"
    //Para navegar potodas as chaves de um objeto, há uma forma especial do loop: "for...in". Isso é algo completamente diferente do 'contruct' "for(;;)" que estudamos anteriormente.
    //A sintaxe:
    
    /*
    for (chave in objeto) {
        //Executa o corpo para cada chave ao decorrer das propriedades do objeto
    }
    */

    //Por exemplo, vamos exibir todas as propriedades de 'user':
    let user = {
        name: 'John',
        age: 30,
        isAdmin: true,
    };

    for (let chave in user) {
        //Chaves
        console.log(chave); //name, age, isAdmin

        //Valor das chaves
        console.log(user[chave]); //John, 30, true
    }

    //Note que todas os 'constructs' "for" permitem-nos declarar variáveis dentro do loop, como o 'let chave'.
    //Também poderíamos utilizar outro nome de variável ao invés de 'chave' ou 'key'. Por exemplo, "for (let prop in obj)" também é amplamente usado.

//Ordenado como um objeto
    //Objetos são ordenados? Em outras palavras, caso iteremos (fizermos um loop) sobre um objeto, nós obtemos todas as propriedades nas mesma ordem em que foram adicionadas? Podemos confiar nisso?

    //A resposta curta é: "ordenadas de uma maneira especial": propriedades inteiras são armazenadas, outras aparecem por ordem de criação. Os detalhes estão a seguir.

    //Como exemplo, vamos considerar um objetos com códigos de país:
    let codes = {
        "49": "Alemanha",
        "41": "Suíça",
        "44": "Grã-Betanha",
        //...
        "1": "EUA",
    };

    for (let code in codes) {
        console.log(code); //1, 41, 44, 49
    }

    //O objeto pode ser usado para sugerir uma lista de opções ao usuário. Se estivermos fazendo um site principalmente para um público alemão, então provavelmente queremos que '49' seja o primeiro.

    //Mas, se executar-mos o código:
    // - EUA (1) vem primeiro;
    // - Então Suíça (41) e assim por diante.

    //Os códigos de telefone vão em ordem crescente/ascendente porque eles são "inteiros". Então vemos '1, 41, 44, 49'.

                //Propriedades inteiras? O que é isso?
                    //O termo "propriedade inteira" aqui significa uma string que pode ser convertida de e para um inteiro sem mudar.

                    //Então "49" é um nome de propriedade inteiro, pois quando é transformado para um número inteiro e vice-versa, continua o mesmo. Mas "+49" e "1.2" não são:
                    //Number(...) explicitamente convertem para um número
                    //Math.trunc é uma função 'build-in' que remove a parte decimal.
                    console.log(String(Math.trunc(Number("49")))); //"49", o mesmo, propriedade inteira.
                    console.log(String(Math.trunc(Number("+49")))); //"49", não o mesmo que "+49", propriedade não-inteira
                    console.log(String(Math.trunc(Number("1.2")))); //"1", não o mesmo que "1.2", propriedade não-inteira

    //...Por outro lado, se as chaves são não-inteiras, então elas são listadas na ordem de criação, por exemplo:
    let user2 = {
        name: 'John',
        surname: "Server",
    };
    user2.age = 25; //adiciona mais uma

    //propriedades não-inteiras são listadas na ordem de criação:
    for (let prop in user2) {
        console.log(prop); //name, surname, age
    }

    //Então, para concertar esse erro com os códigos de telefone, podemos "trapacear" fazendo os códigos serem não-inteiros. Adicionar um sinal de adição (+) antes de cada código é suficiente:
    let codigos = {
        "+49": "Alemanha",
        "+41": "Suíça",
        "+44": "Grã-Betanha",
        //...
        "+1": "EUA",
    }

    for (let codigo in codigos) {
        console.log(codigo); //+49, +41, +44, +1
    }

    //Agora funciona como deveria