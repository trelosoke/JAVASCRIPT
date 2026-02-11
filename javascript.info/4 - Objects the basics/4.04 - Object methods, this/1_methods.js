'use strict';
//Métodos de objeto, "this" (esse)
    //Objetos são geralmente criados para representar entidades do mundo real, como usuários, pedidos e assim por diante:
    let user = {
        name: 'John',
        age: 30,
    };

    //E, no mundo real, um usuário pode AGIR: escolher algo do carrinho de compras, fazer login, fazer logout, etc.
    //Ações são representadas em JavaScript por FUNÇÕES atribuídas à propriedades.

//Exemplos de método
    //Para começar, vamos ensinar o 'user' a dizer olá:
    user.sayHi = function() {   
        console.log('Hi');
    }

    user.sayHi();

    //Aqui nós somente usamos uma Function Expression para criar uma função e atribui-la para a propriedade 'user.sayHi' do objeto.
    //E então chamamos ela com 'user.sayHi()'. O 'user' agora pode falar!

    //Uma função que é a propriedade de um objeto é chamada de seu MÉTODO. Então no exemplo acima temos um método 'sayHi' do objeto 'user'.

    //É claro, poderíamos usar uma função pré-declarada como método:
    let usuario = {/*...*/};

    function dizerOi() {
        console.log('Olá!');
    }

    usuario.dizerOi = dizerOi;
    usuario.dizerOi();

                //Programação Orientada a Objetos (POO)
                    //Quando escrevemos nosso código utilizando objetos para representar entidades, isso é chamado de "programação orientada a objetos" ou 'POO', como abreviação.

                    //POO é algo enorme, uma ciência interessante por si só. Como escolher as entidades corretas? Como organizar a interação entre eles? Isso é arquitetura, e há ótimos livros nesse tópico, como "Design Patterns: Elements of Reusable Object-Oriented Software", ou “Object-Oriented Analysis and Design with Applications” e mais.
                    
//Abreviação de método
    //Há uma sintaxe menor para métodos em um objeto literal:
    let user2 = {
        sayHi: function() {
            console.log('Hello!');
        },
    };

    user2 = {
        sayHi() {   //Apenas colocar a declaração de função normalmente, sem o 'function'
            console.log('Hello!');
        }
    };

    //Há algumas diferenças sutis relacionadas a herança de objetos entre as duas formas, mas isso não importa agora, pois será abordado mais para frente. Na maioria dos casos, a forma menos é preferível.