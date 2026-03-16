'use strict';
//Hints (sugestôes)
    //Como o JavaScript decide qual conversão aplicar?

    //Há três variações da conversão de tipo, as quais acontecem em várias situações. Elas são chamadas de "hints", como descrito na especificação (https://tc39.es/ecma262/#sec-toprimitive):

    //É "string"...
        //...para uma conversão objeto-para-string, quando estamos fazendo uma operação em um objeto que espera uma string, como 'alert':
            //output
            alert(obj); //converte o objeto para string (nesse caso 'object Object').

            //usando o objeto como uma chave de propriedade
            outroObj[obj] = 123; //A chave de uma propriedade sempre é convertida para string.

        
    //É "number"...
        //...para uma conversão objeto-para-número, como quando estamos fazendo cálculos:
            //conversão explícita
            let num = Number(obj);

            //cálculos (exceto o "+" binário)
            let n = +obj; //"+" unário
            let delta = date1 + date2;

            //comparações maior/menor quê
            let greater = user1 > user2;

        //A maioria das funções matemáticas nativas (build-in) também incluem tal conversão.

    
    //"default"
        //Ocorre em casos raros quando o operador não "tem certeza" de qual tipo esperar.

        //Por exemplo, o "+" binário pode trabalhar tanto com strings (concatenando) quanto com números (adicionando). Então se um "+" binário obter um objeto como argumento, usa a 'hint' "default" para abranger isso.

        //Também, caso um objeto é comparado utilizando "==" com uma string, número ou symbol, também não é claro qual conversão deveria ser feita, então a 'hint' "default" é usada.
            //o "+" usa a hint "default"
            let total = obj1 + obj2;

            //'obj == number' usa a hint "default"
            if (user == 1) { /*...*/ };


        //Os operadores de comparação "maior que" e "menor que" podem trabalhar com ambas strings e números também. Ainda assim, eles usam a hint "number", não "default". Isso é por razões históricas.

        //Todos os objetos nativos (build-in) exceto por um caso (objeto 'Date') implementam a conversão "default" do mesmo jeito que "number". E nós provavelmente deveríamos fazer o mesmo.

        //Mesmo assim, ainda é importante saber as 3 hints, em breve veremos o porquê.

    //Para fazer a conversão, o JavaScript tenta encontrar e chamar três métodos de objeto:
        //1. chama 'obj[Symbol.toPrimitive](hint)', o método com a chave "simbólica" 'Symbol.toPrimitive' (system symbol), se tal método existe,

        //2. caso contrário, se hint for "string"
            //- tenta chamar 'obj.toString()' ou 'obj.valueOf()', qualquer um que existir.

        //3. caso contrário, se hint for "number" ou "default"
            //- tenta chamar 'obj.valueOf' ou 'obj.toString()', qualquer um que existir.

    //! -- Caso não tenha entendido muito até esse momento, continue no conteúdo que tudo será esclarecido.