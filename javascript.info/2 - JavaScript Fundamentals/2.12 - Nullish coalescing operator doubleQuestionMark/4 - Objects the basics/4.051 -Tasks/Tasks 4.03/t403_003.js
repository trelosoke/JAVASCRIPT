'use strict';
//Simule uma “ilha” de objetos conectados entre si e depois desconecte a raiz. Explique por que todos são removidos.

let islandObj = {
    name: 'trelo',
    age: 23,
    adress: {
        street: "Rua dos Bobos",
        city: "Nada",
        estado: "NadaTM"
    },
    profile: {
        contact: {
            email: 'treloso@xmail.com',
            phone: '+55 11 9 1234-5678',
        },
    },
}

islandObj = 1; //objeto sobrescrito

console.log(islandObj.profile.contact.email); //O objeto foi desconectado da raiz