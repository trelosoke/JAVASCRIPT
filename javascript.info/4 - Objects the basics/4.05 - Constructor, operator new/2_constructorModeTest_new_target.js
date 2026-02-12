'use strict';
//Teste de modo construtor: new.target
                //Tópico avançado
                    //A sintaxe dessa sessão raramente é usada. Pule-a a não ser que queira saber de tudo.
                    //Eu, Treloso, pessoalmente, prefiro que você veja este tópico.

    //Dentro de uma função, podemos verificar quando ela foi chamada com 'new' ou sem utilizando uma propriedade especial 'new.target'.

    //É 'undefined' para chamadas de função normais e é igual à função se chamada com 'new':
    function User(name) {
        console.log(new.target);
    }

    //sem 'new'
    User();

    //com 'new'
    new User();

    //Isso pode ser utilizado dentro da função para saber se ela foi chamada no modo 'construct' (ou seja, utilizando 'new') ou no modo normal.

    //Também podemos ambas chamadas 'new' e normal fazer a mesma coisa:
    function User2(name) {
        if(!new.target) {   //se retornar undefined, ou seja, se não usar 'new'
            return new User2(name);  //ele a transforma em new
        }

        this.name = name;
    }

    let john = User2("John");
    console.log(john.name); //John

    //Essa abordagem às vezes é utilizada em bibliotecas para fazer a sintaxe mais flexível. Para que as pessoas quando chamarem a função com ou sem 'new', ainda funcionar.

    //Porém, provavelmente não é algo bom utilizá-la em todo lugar, pois omitir o 'new' deixa menos óbvio o que está acontecendo no código. Com 'new' todos sabemos que o novo objeto está sendo criado.