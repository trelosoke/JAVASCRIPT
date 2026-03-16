'use strict';
//Symbol.toPrimitive
    //Vamos começar do primeiro método. Há um symbol nativo (build-in) nomeado 'Symbol.toPrimitive' que deve ser usado para nomear o método de conversão:
    let obj = {};
    obj[Symbol.toPrimitive] = function(hint) {
        //aqui vai o código para converter esse objeto para um primitivo
        //deve retornar um valor primitivo
        //hint = um des seguintes: "number", "string" ou "default"
    };
                //Obs.: dê uma olhada novamente em o que é um Symbol e como se comporta, caso esteja com dúvida nisso. Lembre-se de que os colchetes [] servem para acessar ou criar uma propriedade.

    //Se o método 'Symbol.toPrimitive' existe, é usado para todas as hints, e nenhum outro método é necessário.

    //Por exemplo, aqui o objeto 'user' o implementa:

    let user = {
        name: 'John',
        money: 1000,

        [Symbol.toPrimitive](hint) { //o próprio 'Symbol.toPrimitive' se dará o trabalho de ver o valor de hint
            console.log(`hint: ${hint}`); 
            return (hint == "string") ? `{name: "${this.name}"}` : this.money;
            /* 
            Retorna "hint é igual ao valor "string"? Se sim, retorna `{name: "${this.name}"`. Caso contrário (":"), retorna 'this.money'". Ou seja, retorna para qual primitivo ele será convertido, sendo que nos casos de "default" e "number" retornam a mesma coisa.
            */
        },
    };

    //demo de conversões
    alert(user); //hint: string -> {name: "John"} - console.log aqui não se encaixa, pois ele não converte nada. 'alert' faz uma conversão para string, como vimos antes.
    alert(+user); //hint: number -> 1000
    alert(user + 500); //hint: default -> 1500

    //Como podemos ver no código acima, 'user' torna-se uma string auto-descritiva ou uma quantidade de dinheito (money), dependendo da conversão. O método único 'user[Symbol.toPrimitive]' lida com todos os casos de conversão.

    //Caso ainda esteja confuso, tente dar uma pausa, reler, escrever o meu código por você mesmo e ver como funciona cada parte. Ou tente outro dia, com a mente melhor!