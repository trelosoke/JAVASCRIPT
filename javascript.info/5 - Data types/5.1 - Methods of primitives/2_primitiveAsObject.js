'use strict';
//Um primitivo como um objeto
    //Aqui está o paradoxo enfrentado pelo criador do JavaScript:
        // 1. Há muitas coisas que alguém iria querer fazer com um primitivo, como uma string ou um número. Seria ótimo acessá-los com métodos.
        // 2. Primitivos devem ser tão rápidos e leves quanto possível.

    //A solução parece um pouco estranha, mas aqui está:
        // 1. Primitivos ainda são primitivos. Um único valor, como desejado.
        // 2. A linguagem permite acesso a métodos e propriedades de strings, números, booleans e symbols.
        // 3. Para que isso funcione, um "object wrapper (envelopador)" que fornece a funcionalidade extra é criado, e então destruído.

    //Os "object wrappers" são diferentes para cada tipo primitivo e são chamados: String, Number, Boolean, Symbol e BigInt. Logo, eles provêm diferentes conjuntos de métodos.

    //Por exemplo, existe um método de string 'str.toUpperCase()' que retorna um 'str' todo em letras maiúsculas/em caixa alta:
        let str = "Hello";

        console.log(str.toUpperCase()); //HELLO

    //Simples, certo. Aqui está o que realmente acontece em 'str.toUpperCase()':
        // 1. A string 'str' é um primitivo. Então no momento de acessar sua propriedade, um objeto especial (anônimo) é criado que sabe o valor da string (pois ele foi criado para esse intuito), e tem métodos úteis, como 'toUpperCase()'.

        // 2. Esse método é executado e retorna uma nova string (mostrado pelo console.log), que substitui a string original que pertencia à 'str'.

        // 3. O objeto especial é destruído pelo Garbage Collection, deixando o primitivo 'str' sozinho.

    //Assim, primitivos podem fornecer métodos, mas ainda assim permanecem leves.

    //A engine (motor) do JavaScript otimiza bastante o processo. Ele pode até mesmo pular a criação do objeto extra por completo. Mas ainda deve aderir à especificação e se comportar como se criasse um.


    //Um número tem métodos próprios, por exemplo, 'toFixed(n)' arredonda o número para o número de casas decimais desejado, como o seguinte:
        let n = 1.23456; //Números decimais são dados aqui com ponto, não vírgula
        console.log(n.toFixed(2)); //2 casa decimais

    //Falaremos de métodos mais específicos nos capítulos Numbers e Strings.

                
                //!!- Construtores 'String/Number/Boolean' são para uso interno apenas
                    //Algumas linguagens como Java nos permitem criar explicitamente "wrapper objects (objetos que envolvem)" para primitivos usando uma sintaxe como 'new Number(1)' ou 'new Boolean(false)'.

                    //No JavaScript, isso também é possível por razôes históricas, mas fortemente NÃO RECOMENDADO. As coisas vão ficar doidas em muitos lugares.

                    //Por exemplo: 
                        console.log(typeof 0); //"number"

                        console.log(typeof new Number(0)); //"object"!
                    
                    //Objetos são sempre 'truthy' em 'if', então aqui o console.log irá aparecer:
                        let zero = new Number(0);

                        if (zero) {
                            console.log("Zero é 'truthy'?!");
                        }

                    //Por outro lado, usando as mesmas funções 'String/Number/Boolean' sem 'new' é totalmente aceitável e útil. Eles convertem um valor para o tipo correspondente: string, number ou boolean (primitivos).

                    //Por exemplo, isso é totalmente válido:
                        let num = Number("123"); //123 -> typeof num === "number"
                        console.log(typeof num === "number"); //true


                //'null/undefined' não têm métodos
                    //Os primitivos especiais 'null' e 'undefined' são excessões. Eles não têm "wrapper objects" correspondentes e não fornecem métodos. Em certo sentido, eles são os "mais primitivos"