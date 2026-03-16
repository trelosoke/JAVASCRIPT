'use strict';
//Symbols globais
    //Como vimos, normalmente todos os 'symbols' são diferentes, mesmo tendo o mesmo nome. Mas algumas vezes queremos que 'symbols' de mesmo nome sejam a mesma entidade. Por exemplo, diferentes partes da nossa aplicação quererem acessar 'symbol' "id" significando exatamente a mesma propriedade.

    //Para alcançar isso, há um "registro de symbol global". Podemos criar 'symbols' dentro desse registro e acessá-los depois, o que garante que acessos repetidos pelo mesmo nome retorne exatamente o mesmo 'symbol'.

    //Para ler (criar se ausente) um 'symbol' do registro, use 'Symbol.for(key)'.

    //Essa chamada verifica o registro global, e se há um 'symbol' descrito como 'key', ele é retornado, caso contrário cria um novo 'symbol' 'Symbol(key)' e o armazena no registro pela 'key' fornecida.

    //Por exemplo:
        //lê do registro global
        let id = Symbol.for("id"); //se o 'symbol' não existia, ele é criado

        //lê novamente (talvez de outra parte do código)
        let idAgain = Symbol.for("id"); 

        //o mesmo 'symbol'
        console.log(id === idAgain); //true

    //Symbols dentro do registro são chamados de 'symbols' globais. Se quisermos um 'symbol' em toda a aplicação, acessível de qualquer lugar do código, é para isso que elas servem.

                //Isso parece Ruby
                    //Em algumas linguagens de programação, como Ruby, há um único 'symbol' por nome.

                    //No JavaScript, como podemos ver, isso acontece com 'symbols' globais.