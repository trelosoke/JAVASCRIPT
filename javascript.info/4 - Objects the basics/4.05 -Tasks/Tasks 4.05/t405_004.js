'use strict';
//Use 'new.target' dentro de uma função construtora para verificar se foi chamada com ou sem new.

function User(name) {
    this.name = name;
    this.wasNew = (new.target) ? true : false;
}


let user = new User("Douglas");
console.log(user);

User("Douglas"); //Impossível fazer tal verificação, pois não é possível criar o objeto sem o new.