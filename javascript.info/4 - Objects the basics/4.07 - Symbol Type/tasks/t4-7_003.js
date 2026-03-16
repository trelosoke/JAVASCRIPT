'use strict';
/* 
Usando o objeto `config` da tarefa anterior:

1. Tente listar as chaves usando `for..in`. O Symbol aparece?
2. Tente listar as chaves usando `Object.keys()`. O Symbol aparece?
3. Crie um clone desse objeto usando `Object.assign`. O Symbol foi copiado para o clone? Verifique acessando `clone[id]`.
*/

let id = Symbol("id");

let config = {
    [id]: "MEU_ID",
    theme: 'dark',
};

for (let key in config) {
    console.log(key); //symbol é invisívle nesse caso
}

console.log(Object.keys(config)); //apenas 'theme'

let configClone = Object.assign({}, config);
console.log(configClone); //Clona o Symbol

console.log(configClone[id]); //MEU_ID