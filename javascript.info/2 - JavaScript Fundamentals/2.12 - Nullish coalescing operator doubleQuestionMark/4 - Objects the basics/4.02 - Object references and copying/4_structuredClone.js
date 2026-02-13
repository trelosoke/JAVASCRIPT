'use strict';
//structuredClone (deep cloning)
    //A chamada 'structuredClone(objeto)' clona o objeto com todas as propriedades aninhadas. Aqui está como podemos usá-la:
    let user = {
        name: 'John',
        age: 30,
        sizes: {
            height: 182,
            width: 50,
        },
    };

    let clone = structuredClone(user);

    console.log(user.sizes === clone.sizes); //false, são objetos diferentes

    //'user' e 'clone' não têm relação alguma agora
    user.sizes.width = 60;
    console.log(clone.sizes.width); //continua 50


    //Esse método consegue clonar a maioria dos tipos de dado, tais como objetos, arrays, valores primitivos.
    //Também suporta referências circulares, quando uma propriedade de um objeto referencia o objeto em si (diretamente ou via uma cadeia ou referencias):
    
    let user2 = {};
    //vamos criar uma referência circular:
    //user2.me referencia o 'user2' ele próprio
    user2.me = user2;
    
    // let user2 = { --- se torna isso
    //     me: user2,
    // }

    let clone2 = structuredClone(user2);
    console.log(clone2.me === clone2); //true

    //Como podes ver, 'clone2.me' referencia o 'clone', não o 'user2'. Então a referência circular foi clonada corretamente também.

    //Entretanto, há casos em que o structuredClone falha. Por exemplo, quando um objeto tem uma propriedade que é uma função:
    structuredClone( {f: function() {}} ); //erro

    //Propriedades com funções não são suportadas. Para lidar com esses casos complexos, precisamos de uma combinação de métodos de clonagem, escrever códigos personalizados ou, para não reinventar a roda, utilizar uma implementação existente. Por exemplo, '_.cloneDeep(obj)' da biblioteca de JavaScript "Lodash".