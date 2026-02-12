'use strict';
//Constructor, operador "new"
    //A sintaxe de objeto literal '{...}' nos permite criar um objeto. Mas frequentemente necessitamos criar vários objetos semelhantes, como múltiplos 'user' ou itens de um menu e assim por diante.
    //Isso pode ser feito usando funções construtoras (constructor) e o operador "new".

//Função "constructor"
    //Funções construtoras são tecnicamente funções normais. Entretanto, há duas convensões (regras):
        // 1. São nomeadas com letra maiúcula primeiro;
        // 2. Devem ser executadas apenas com o "new" operator.
        
    //Por exemplo:
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user = new User("Jack");

    console.log(user.name); //Jack
    console.log(user.isAdmin) //false

    //Quando uma função é executada com 'new', faz os seguintes passos:
        // 1. Um novo objeto vazio é criado e atribuído a 'this';
        // 2. O corpo da função é executado. Normalmente ele modifica 'this', adicionando propriedades a ele.
        // 3. O valor de 'this' é retornado.

    //Em outras palavras, 'new User(...) faz algo como:
    function User2(name) {
        //this = {}; (implicitamente)

        //adiciona propriedades a 'this'
        this.name = name;
        this.isAdmin = false;

        //return this; (implicitamente)
    }

    //Então 'let user = new User("Jack");' fornece o mesmo resultado que:
    // let user = {
    //     name: "Jack",
    //     isAdmin: false,
    // };


    //Agora se quisermos criar outros usuários, podemos chamar 'new User("Maicon")', 'new User("Elisa")' e assim por diante. Muito menor do que usar literais a todo momento, e também mais legível.

    //Esse é o principal propósito de constructors, implementar código retutilizável de criação de objetos.

    //Vamos notar novamente: tecnicamente, qualquer função (exceto arrow functions, que não têm 'this') pode ser usada como 'constructor'. Ela pode ser executada com 'new' e executará o algoritmo acima. A letra maiúscula primeiro é um consenso entre os desenvolvedores para deixar claro que uma função deve ser executada com 'new'.

                //new function() {...}
                    //Se temos muitas linhas de código todas sobre criação de um único objeto complexo, podemos envolvê-las em uma função construtora chamada imediatamente, assim:
                    
                    //cria uma função e imediatamente a chama com 'new'
                    let user2 = new function() { //cria um objeto
                        this.name = "John";
                        this.isAdmin = false;

                        //... outro código para criação de user
                        //talvez lógica complexa e declarações
                        //variáveis locais, etc
                    }

                    //Essa 'constructor' não pode ser chamada novamente, pois não está salva em nenhum lugar, só foi criada e chamada. Portanto, esse truque só visa envolver o código que constrói um objeto único, sem reutilização futura.

                    //Há outra técnica que é mais utilizada e utiliza function expression que é basicamente a mesma coisa. Recomendo pesquisar depois por ela: IIFE (Immediately Invoked Function Expression).