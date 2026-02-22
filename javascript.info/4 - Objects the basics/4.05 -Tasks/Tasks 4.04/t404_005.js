'use strict';
//Crie um objeto com um método que usa 'this', mas passe esse método como callback para setTimeout. Observe o resultado.

let user = {
    name: 'trelo',
    sayHi: function() {
        console.log("Olá, " + this.name + "!");
    },
};

setTimeout(user.sayHi, 1000); //Utilizando a função dessa forma, o this se perde do objeto base, resultando-o em 'undefined'. Mas a mensagem ainda aparece, só não o 'this.name'.

setTimeout(() => user.sayHi(), 1000); //Funciona perfeitamente, pois a chamada está dentro de uma função, independente de ser arrow function.

//setTimeout(user.sayHi(), 1000); //Aqui ele vai retornar a chamada imediata da função, que é o que ele retorna. Nesse caso, ela vai retornar o texto + 'undefined'. O que não faz sentido, pois 'setTimeout' espera uma função como primeiro argumento. Ocasiona erro mesmo no modo não estrito.