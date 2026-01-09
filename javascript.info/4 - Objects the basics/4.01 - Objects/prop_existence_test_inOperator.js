'use strict';
//É possível acessar qualquer propriedade. Não há erro caso ela não exista, 
//só é dada como undefined.
let obj = {};
console.log(obj.semTalPropriedade === undefined);

//Operador "in" verifica se é undefined ou não
let user = {
    name: 'John'
}

console.log('name' in user); //Lê-se "há a propriedade 'name' dentro do objeto user?"
console.log('blabla' in user); 


//Usar variáveis
let user2 = {
    age: 30
};

let key = 'age'
console.log(key in user2);


//Usar "in" ou "=== undefined"?
let obj2 = {
    test: undefined
};

console.log(obj.test); //Aqui dá undefined
console.log('test' in obj2); //Aqui, true. Ele avalia se a propriedade existe.
//Essa situação é bem rara. Só fique atento em quando precisar. Normalmente, 
//quando queremos que uma propriedade seja nada, utilizamos null.