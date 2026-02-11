'use strict';
//Clonagem e mesclagem, Object.assign
    //Então, copiar uma variável de objeto cria mais uma referência para o mesmo objeto. Mas e se precisarmos duplicar um objeto?

    //Podemos criar um novo objeto e replicar a estrutura do já existente iterando suas propriedades e as copiando para o nível primitivo:
    let user = {
        name: 'John',
        age: 30,
    };

    let clone = {}; //Um novo objeto vazio

    //Vamos copiar todas as propriedades de 'user' para dentro do clone
    for (let key in user) {
        clone[key] = user[key];
    }

    //Agora o clone é um objeto totalmente independente com o mesmo conteúdo

    clone.name = 'Pete';
    console.log(user.name); //Ainda John do objeto original

//Object.assign
    //Podemos também utilizar o método 'Object.assign'. A sintaxe é:
    // Object.assign(dest, ...sources)
    //O primeiro argumento 'destino' é o objeto-alvo.
    //Os argumentos adicionais são uma lista de objetos de origem.

    //Ele copia as propriedades de todos os objetos de origem para dentro de 'destino' e então o retorna como resultado.

    //Por exemplo, temos o objeto 'user2', vamos adicionar algumas permissões a ele:

    let user2 = {name: 'John'};

    let permission1 = {canView: true};
    let permission2 = {canEdit: true};

    //copia todas as propriedades de 'permission1' e 'permission2' para dentro de 'user2'
    Object.assign(user2, permission1, permission2);

    //agora 'user2 = {name: 'John', canView: true, canEdit: true}'~
    console.log(user2);


    //Se o nome da propriedade copiada já existe, ele o sobrescreve:
    Object.assign(user2, {name: 'John Server'});
    console.log(user2.name);

    
    //Também pode-se utilizar 'Object.assign' para realizar uma clonagem de objeto simples:
    let user3 = {
        name: 'John',
        age: 30,
    };

    let clone3 = Object.assign({}, user3);
    
    console.log(clone3.name);
    console.log(clone3.age);

    //Aqui ele copia todas as propriedades de 'user3' para dentro de um objeto vazio, retornando-o.
    //Há também outros métodos de clonar um objeto, p.ex. usando a sintaxe de espalhamento (spread sintax) 'clone = {...user}, que será abordada mais para frente no tutorial.

    