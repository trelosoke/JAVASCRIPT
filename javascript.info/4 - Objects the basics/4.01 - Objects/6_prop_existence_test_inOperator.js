'use strict';
//Teste de existência de propriedade, operador "in"
    //Uma funcionalidade notável de objetos no JavaScript, comparada com muitas outras linguagens, é que é possível acessar qualquer propriedade. Não haverá erro caso uma propriedade não exista.

    //Ler uma pripriedade não existente apenas retorna "undefined". Então odemos testar facilmente se a propriedade existe:
    let user = {};

    console.log(user.naoHaTalPropriedade === undefined); //true significa que não há tal propriedade.

    //Há também um operador especial "in" para isso. A sintaxe é:
    //"chave" in objeto
    //Por exemplo:
    let objeto = {isObject: true};
    let chave = 'isObject';

    console.log(chave in objeto); //true, a propriedade 'isObject' existe

    //Por que o operador 'in' existe? A comparação com 'undefined' não é o suficiente?
    //Na maioria das vezes, sim. Mas há um caso em particular em que ele falha, mas 'in' funciona corretamente: quando a propriedade de um objeto existe, mas ela armazena 'undefined':
    let obj = {
        teste: undefined,
    };

    console.log(obj.teste); //É undefined. Então, ela não existe?
    console.log("teste" in obj); //true, ela existe

    //No código acima, obj.teste tecnicamente existe. Então o operador 'in' funciona corretamente. 

    //Situações como essa raramente acontecem, pois 'undefined' não deveria ser atribuído explicitamente. Normalmente usamos 'null' para valores 'desconhecidos' ou 'vazios'. Então o operador 'in' é um convidado exótico no código, utilizado raramente.