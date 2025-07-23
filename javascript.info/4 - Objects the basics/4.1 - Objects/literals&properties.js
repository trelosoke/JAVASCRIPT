'use strict';
let user = {        //Um objeto
    name: 'João',   //key "name" armazena a string "João"
    age: 30,        //key "age" armazena o number "30"
};

//Propriedades do objeto são acessíveis por "objeto.propriedade"
console.log(user.name);
console.log(user.age);

//Adicionando propriedades
user.isAdmin = true;
console.log(user.isAdmin);

//Deletando propriedades
delete user.age;
console.log(user.age);

//Propriedades nomeadas com mais de uma palavra
let user2 = {
    name: 'Pedro',
    'middle name': 'Ferreira',  //Usa-se string 
}
    //Última propriedade sempre com comma. É mais fácil para mexer com as propriedades;

console.log(user2["middle name"]); //É chamado desse jeito