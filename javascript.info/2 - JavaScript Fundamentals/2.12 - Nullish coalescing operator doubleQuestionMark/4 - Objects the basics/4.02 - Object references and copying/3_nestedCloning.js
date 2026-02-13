'use strict';
//Clonagem aninhada (objeto dentro de objeto)
    //Até agora haviamos assumido que todas as propriedades de 'user' são primitivas. Mas propriedades podem ser referências para outros objetos:
    let user = {
        name: 'John',
        sizes: {
            height: 182,
            width: 50,
        }
    };

    console.log(user.sizes.height); //182

    //Agora não é suficiente copiar 'clone.sizes = user.sizes', pois 'user.sizes' é um objeto e será copiado por referência, então 'clone' e 'user' compartilharão os mesmos 'sizes'.

    let user2 = {
        name: "John",
        sizes: {
            height: 182,
            width: 50
    }
    };

    let clone = Object.assign({}, user2);

    console.log( user2.sizes === clone2.sizes ); // true, o mesmo objeto

    // user and clone share sizes
    user2.sizes.width = 60;    // muda a propriedade de um lugar
    console.log(clone.sizes.width); // 60, pega o resultado de outro. Continua o mesmo valor.


    //Para concertar isso e fazer 'user' e 'clone' objetos realmente separados,devemos usar um loop de clonagem que examina cada valor de 'user[key]' e, se for um objeto, então replicar sua estrutura também. Isso chama-se "deep cloning (clonagem profunda)" ou "structured cloning (clonagem estruturada)". Há o método 'structuredClone' que implementa isso.