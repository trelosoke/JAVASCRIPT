'use strict';
//Métodos de primitivos
    //O JavaScript nos permite trabalhar com primitivos (strings, números, etc.) como se fossem objetos. Eles também fornecem métodos para chamá-los como tal. Nós estudaremos isso em breve, mas primeiro veremos como isso funciona, pois, claro, primitivos não são objetos (e aqui deixaremos isso ainda mais claro).

    //Vamos dar uma olhada nas diferenças chaves entre primitivos e objetos:
        //Um primitivo:
            // - É um valor de um tipo primitivo.
            // - Existem 8 tipos primitivos: string, number, bigInt, boolean, symbol, null e undefined

        //Um objeto:
            // - É capaz de armazenar múltiplos valores como propriedades
            // - Pode ser criado com {}, por exemplo> '{name: "John", age: 30}'. Há outros tipos de objetos no JavaScript: funções, por exemplo, são objetos.

    //Uma das melhores coisas sobre objetos é que podemos guardar uma função como uma de suas propriedades:
    let john = {
        name: "John",
        sayHi: function() {
            console.log("Oi, amigo!");
        }
    };

    john.sayHi();

    //Então aqui nós fizemos um objeto 'john' com o método 'sayHi'.

    //Muitos objetos nativos (build-in) já existem, como aqueles que funcionam com datas, erros, elementos HTML, etc. Eles têm diferentes propriedades e métodos.

    //Mas essas funcionalidades vêm com um custo! Objetos são "mais pesados" que primitivos. Eles requerem recursos adicionais para suportar o "maquinário interno".