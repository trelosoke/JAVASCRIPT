'use strict';
//"this" em métodos
    //É comum que um método de objeto precise acessar a informação guardada no objeto para realizar seu trabalho. Por exemplo, o código dentro de 'user.sayHi()' precisa do nome do 'user'.

    // ! -- Para acessar o objeto, um método pode utilizar a palavra-chave "this".
    //O valor the 'this' é o objeto "antes do ponto", o utilizado para chamar o método. Por exemplo:
    let user = {
        name: 'John',
        age: 30,

        sayHi() {
            //"this" é o "objeto atual"
            console.log(this.name);
        }
    };

    user.sayHi();

    //Aqui durante a execução de 'user.sayHi()', o valor de 'this' será 'user'.
    
    //Tecnicamente,também é possível acessar o objeto sem o 'this', o referenciando pela variável externa:
    let user2 = {
        name: 'John',
        age: 30,

        sayHi() {
            console.log(user2.name);
        }
    };

    //...Mas tal código não é confiável. Se decidirmos copiar 'user' para outra variável, p.ex. 'admin = user' e sobrescrever user com outra coisa, então ele vai acessar o objeto errado:
    let user3 = {
        name: 'John',
        age: 30,

        sayHi() {
            console.log(user3.name);
        }
    };

    let admin3 = user3;
    user3 = null;
    admin3.sayHi(); //tenta dar console.log em uma variável de valor vazio: Erro

    //Não faz sentido referenciar o objeto pelo nome da variável que o armazena por esse motivo. O objeto não deixou de existir, mas seu método faz referência a uma variável que tem um valor vazio. Se utilizássemos 'this.name' ao invés de 'user3.name' dentro de console.log, o código funcionaria normalmente.