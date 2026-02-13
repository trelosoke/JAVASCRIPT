'use strict';
//Crie uma função construtora que retorna explicitamente um objeto diferente de 'this'. Teste o resultado.

function UserFelipe() {
    this.name = "Felipe";
    this.age = 18;

    return {
        name: "Rafael",
    };
}

let userFelipe = new UserFelipe();
console.log(userFelipe); //O objeto retornado é considerado ao invés do implícito 'return this;'.