'use strict';
//Duas referências na memória
let user = {
    name: 'John'
};

let Admin = user; //Ambos utilizam o mesmo objeto.

user = null; //Caso isso aconteça, Admin ainda estará com o objeto de referência na memória
console.log(Admin); //Será apagado somente se Admin também for sobrescrito.