'use strict';
//Symbols em um objeto "literal"
    //Se quisermos usar um 'symbol' em um objeto literal '{...}', precisamos de colchetes o envolvendo:
    let id = Symbol("id");

    let user = {
        name: 'John',
        [id]: 123, //não 'id: 123' ou '"id": 123
    };

    //Isso porque precisamos do valor dentro da variável 'id', não a string "id"