'use strict';
//Crie um objeto 'profile' e copie sua referência para 'admin'. Altere uma propriedade usando 'admin' e verifique se a mudança aparece em 'profile'.

let profile = {
    name: 'Trelo',
    age: 25,
};

let admin = profile;

admin.name = 'EU';
console.log(profile);