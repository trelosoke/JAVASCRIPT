'use strict';
//Podemos imediatamente colocar propriedades dentro das chaves como pares de "key: value":
let user = {    //Um objeto
    name: "John",   //pela chave "name" armazena o valor "John"
    age: 30,   //pela chave "age" armazena o valor "30"
};

//Uma propriedade tem uma chave (também conhecido como "nome" ou "identificador") antes dos dois pontos e um valor no seu lado direito.
//No objeto "user", há duas propriedades::
    // 1. A primeira propriedade tem o nome "name" e o valor "John"
    // 1. A segunda tem o nome "age" e o valor "30"

//O objeto user resultante pode ser imaginado como um armário com dois arquivos nomeados como "name" e "age".

//Podemos adicionar, remover e "ler" arquivos dele a qualquer momento.

//Valores de propriedade são acessíveis utilizando a notação de ponto (.):

console.log(user.name);
console.log(user.age);

//O valor pode ser de qualquer tipo. Vamos adicionar um boolean:
user.isAdmin = true;
console.log(user); //Agora, há isAdmin

//Para remover uma propriedade, podemos usar o operador 'delete':
delete user.isAdmin;
console.log(user);

//Também é possível usar nomes de propriedades com mais de uma palavra, mas devem estar entre aspas:
user["likes birds"] = true;
console.log(user);

//A ultima propriedade da lista deve terminar em vírgula. É considerada boa prática para não esquecer ela quando for adicionar uma outra propriedade, por exemplo (chamada de trailing comma).