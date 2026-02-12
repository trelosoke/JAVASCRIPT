'use strict';
//Métodos em 'constructor'
    //Usar funções 'constructor' para criar objetos fornece uma grande flexibilidade. Ela pode ter parâmetros que definem como construir o objeto e o que colocar nele.

    //É claro, podemos adicionar para 'this' não apenas propriedades, mas métodos também.

    //Por exemplo, 'new User(name)' abaixo cria um objeto com o dado 'name' e o método 'sayHi':
    function User(name) {
        this.name = name;

        this.sayHi = function() {
            console.log("My name is " + this.name);
        };
    }

    let john = new User("John");
    john.sayHi();

    /*
    john = {
        name: "John",
        sayHi: function() { ... }
    }
    */

    //Para criar objetos mais complexos, há uma sintaxe mais avançada, classes, que irá ser abordado em capítulos futuros.