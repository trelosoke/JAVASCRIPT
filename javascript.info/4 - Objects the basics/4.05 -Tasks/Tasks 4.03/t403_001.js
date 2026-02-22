'use strict';
//Crie um objeto 'user' e depois defina 'user = null'. Explique o que acontece com a memória.

let user = {
    name: 'trelo',
    age: 42,
};

user = null; //o objeto agora foi retirado da memória pelo 'garbage collection'. não existe mais

console.log(user);