'use strict';
//toString/valueOf
    //Se não há 'Symbol.toPrimitive' então o JavaScript tenta encontrar métodos 'toString' e 'valueOf':
        //- Para a hint "string": chama o método 'toString', e se ele não existir ou se retornar um objeto ao invés de um primitivo, então chama 'valueOf' (então 'toString' tem priotidade em conversões de string).

        //- Para outras hints: chama 'valueOf', e se não existir ou se retornar um objeto no lugar de um primitivo, então chama 'toString' (então 'valueOf' tem a prioridade para cálculos).

    
    //Os métodos 'toString' e 'valueOf' vêm de tempos antigos. Eles não são symbols (symbols não existiam tanto tempo atrás), mas sim métodos "regulares" com nomes de string. Eles providenciam um caminho alternativo "old-style" de implementar a conversão.

    //Esses métodos devem retornar um valor primitivo. Se 'toString' ou 'valueOf' retornarem um objeto, ele é ignorado (o mesmo que se não houvesse método).

    //Por padrão, um objeto simples têm os seguintes métodos 'toString' e 'valueOf':
        //- O método 'toString' retorna uma string "[object Object]".
        //- O método 'valueOf' retorna o próprio objeto.

    //Aqui está a demonstração (demo):
    let user = {name: "John"};

    alert(user); //[object Object]
    console.log(user.valueOf()); // {name: "John"}
    alert(user.valueOf() === user) //true
    

    //Então se tentarmos usar um objeto como string, como em um 'alert' e assim por diante, por padrão veremos '[object Object]'.

    //O 'valueOf' padrão é mencionado aqui apenas para fins de completude (mencionar tudo tecnicamente), para evitar qualquer confusão. Como podes ver, retorna o próprio objeto, e então é ignorado. Não me pergunte o porquê, isso é por razôes históricas. Então podemos assumir que não existe.

    //Vamos implementar esses métodos para customizar a conversão.

    //Por exemplo, aqui 'user' faz o mesmo que acima usando uma combinação de 'toString' e 'valueOf' ao invés de 'Symbol.toPrimitive':
    let user2 = {
        name: 'John',
        money: 1000,

        //para hint="string"
        toString() {
            return `{name: "${this.name}"}`;
        },

        //para hint="number" ou "default"~
        valueOf() {
            return this.money;
        }
    };

    alert(user); //toString -> {name: "John"};
    alert(+user); //valueOf -> 1000
    alert(user + 500); //valueOf -> 1500

    //Como podemos ver, o comportamento é o mesmo do exemplo anterior com 'Symbol.toPrimitive'.


    //Frequentemente queremos um único lugar "catch-all (abrangente)" para lidar com todas as conversões para primitivos. Nesse caso, podemos implementar apenas o 'toString':

    let user3 = {
        name: 'John',

        toString() {
            return this.name;
        },
    };

    alert(user); //toString -> "John"
    alert(user + 500) //toString -> "John500"

    //Na falta de 'Symbol.toPrimitive' ou 'valueOf', 'toString' irá lidar com todas as conversões para primitivos.