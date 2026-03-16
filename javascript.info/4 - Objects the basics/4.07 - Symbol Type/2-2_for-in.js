'use strict';
//Symbols são "pulados" por 'for...in'
    //Propriedades "simbólicas" não participam do loop 'for...in':
    let id = Symbol("id");

    let user = {
        name: 'John',
        age: 30,
        [id]: 123,
    };

    for(let key in user) console.log(key); //name, age (sem 'symbols')

    //o acesso direto pelo 'symbol' funciona
    console.log('Direto: ' + user[id]); //Direto: 123

    //Object.keys(user) também o ignora. Isso é parte do princípio geral de "ocultação de propriedades simbólicas". Se outro script ou biblioteca iterar sobre nosso objeto, não vai inesperadamente acessar uma propriedade "simbólica".

    //Em contraste, 'Object.assign' copia ambas as propriedades string e 'symbol':
    let id2 = Symbol("id");

    let user2 = {
        [id2]: 123,
    };

    let clone = Object.assign({}, user2);

    console.log(clone[id2]); //123

    //Não há paradóxo aqui. Isso é pelo design do próprio JavaScript, pois, normalmente quando clonamos ou mesclamos objetos, queremos que TODAS as propriedades sejam copiadas (incluindo 'symbols' como 'id')