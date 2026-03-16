'use strict';
//Symbol.keyFor
    //Nós vimos que para 'symbols' globais, 'Symbol.for(key)' retorna um 'symbol' pelo nome. Para fazer o oposto, retornar um nome pelo 'symbol' global, podemos usar: 'Symbol.keyFor(sym):
        //Obtém o symbol pelo nome
        let sym = Symbol.for("name");
        let sym2 = Symbol.for("id");

        //Obtém o nome pelo symbol
        console.log(Symbol.keyFor(sym)); //name
        console.log(Symbol.keyFor(sym2)); //id

    //O 'Symbol.keyFor' usa internamente o registro de symbol global para procurar a 'key' do symbol. Então não funciona para symbols que não são globais. Se o symbol não é global, não será possível encontrá-lo e retorna 'undefined':
        function globalSymbolTest() {
            let symbol = Symbol("idd"); //sem estar no registro
            let globalSymbol = Symbol.for("idd"); //estando no registro

            console.log(Symbol.keyFor(symbol)); //undefined
            console.log(Symbol.keyFor(globalSymbol)); //idd 
        }

        globalSymbolTest();

    
    //Dito isto, todos os symbols têm a propriedade 'description':
    let globalSymbol = Symbol.for("name");
    let localSymbol = Symbol("name");

    console.log(Symbol.keyFor(globalSymbol)); //name, symbol global
    console.log(Symbol.keyFor(localSymbol)); //undefined, não global

    console.log(localSymbol.description); //name