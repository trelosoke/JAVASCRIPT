'use strict';
//Clonagem aninhada (objeto dentro de objeto)
let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(user.sizes.height);

//Caso feita a clonagem da forma aprendida anteriormente
let userClone = Object.assign({}, user);

console.log(userClone.sizes == user.sizes); //true. Referenciam o mesmo objeto.

user.sizes.height = 40;
console.log(userClone.sizes.height); //40, não 50, como há no objeto inicialmente. Como há um objeto na propriedade, ele é pegado pelo user clone como referencia. Logo, caso os valores dentro de size mudarem, também mudará em seu clone.