'use strict';
//"this" não está vinculado
    //No JavaScript, a palavra-chave "this" se comporta de maneira diferente da maioria das outras linguagens. Pode ser usada em qualquer função, mesmo se não for um método de um objeto.
    
    //Não há erro de sintaxe no exemplo a seguir:
    function sayHi() {
        console.log(this.name);
    }

    //O valor de 'this.name' é avaliado durante o tempo de execução, dependendo do contexto. Por exemplo, aqui a mesma função é atribuída para dois objetos diferentes e tem diferentes 'this' nas chamadas:
    let user = {name: 'John'};
    let admin = {name: 'Admin'};

    function sayHi() {
        console.log(this.name);
    }

    //usa a mesma função em dois objetos
    user.f = sayHi;
    admin.f = sayHi;

    //essas chamadas têm diferentes 'this'
    //'this' dentro da função é o objeto "antes do ponto"
    user.f(); //John (this == user)
    admin.f(); //Admin (this == admin)

    admin['f']; //Admin (o ponto ou os colchetes acessam o método, não importa)


    //A regra é simples: se 'objeto.f()' é chamado, então 'this' é 'objeto' durante a chamada de 'f'. Então ou é 'user', ou é 'admin' no exemplo acima.

                //Chamando sem um objeto 'this === undefined'
                    //Podemos até chamar a função sem um objeto:
                    function dizerOi() {
                        console.log(this);
                    }

                    dizerOi(); //undefined

                    //Nesse caso, 'this' é 'undefined' no modo estrito. Se tentarmos acessar 'this.name', haverá um erro.

                    //No modo não estrito, o valor de 'this' em tal caso será o objeto global ('window' em um navegador, chegaremos neste assunto posteriormente em "Global Object"). Isso é um comportamento histórico que o "use strict" concertou.

                    //Normalmente tal chamada é um erro de programação. Se há um 'this' em uma função, ele espera ser chamado em um contexto de objeto.

                
                //As consequências de desvincular 'this'
                    //Se você vem de outra linguagem de programação, então provavelmente está acostumado com a ideia de "vincular 'this'", onde os métodos definidos em um objeto sempre têm 'this' referenciando o objeto.

                    //No JavaScript, 'this' é "livre"; seu valor é avaliado no "call-time (momento da chamada)" e não depende de onde o método foi declarado, mas sim de qual objeto está "antes do ponto".
                    //Isso pode ser observado aqui:
                    let user2 = {
                        name: "Angela",
                        sayHi() {
                            console.log("Oi, meu nome é" + this.name);
                        }
                    };

                    let f = user2.sayHi; //Copiamos a função para uma variável;
                    f(); //TypeError: undefined (tentando ler name). 
                    //Isso porque o this necessita estar associado a algum objeto. Com isso, quero dizer que a chamada da função, para this conseguir funcionar, deve estar diretamente associada ao objeto. Ou seja, como 'f()' está chamando-a indiretamente, this se torna undefined.

                    //A forma correta seria associando a função diretamente ao 'user2': 'user2.sayHi()'. Ou usando 'bind', mas isso será visto depois.

                    //O conceito de 'this' ser avaliado no tempo de execução tem seus prós e contras. Por um lado, uma função pode ser reutilizada para diferentes objetos. Por outro lado, essa maior flexibilidade cria mais brechas para erros.

                    //Aqui nossa posição não é julgar se a decisão de design da linguagem é boa ou ruim. Iremos entender como trabalhar com isso, como ganhar benefícios e evitar problemas.