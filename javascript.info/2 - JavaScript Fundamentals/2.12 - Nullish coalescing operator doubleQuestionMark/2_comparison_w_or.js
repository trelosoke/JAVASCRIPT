'use strict';
//Comparação com OR (||)
    //O operador OR pode ser utilizado do mesmo jeito como ??:
    let nomePrimeiro = null;
    let nomeUltimo = null;
    let nickName = 'Supercoder';

    console.log(nomePrimeiro || nomeUltimo || nickName || 'Anônimo');
    //Resulta no mesmo.

    //Porém, historicamente, o OR já estava lá desde o começo do JavaScript. Então desenvolvedores o estavam usando para tais propósitos por um longo tempo.
    //Por outro lado, o nullish coalescing operator foi adicionado recentemente (ECMAScript 2020), e a razão por isso foi que as pessoas não estavam muito felizes com o OR.

    //A importante diferença entre ambos é que:
        // - OR (||) retorna o primeiro valor "truthy"
        // - NCO (??) retorna o primeiro valor "definido"

    //O OR determina os valores que não "truthy" como TODOS os valores "falsy": 0, string vazia '', false, null e undefined. Ele não diferencia esses valores. Se qualquer um desses valores fossem o primeiro, seria retornado o próximo true.

    //O NCO determina os valores que não são "definidos" como apenas null e undefined. Ou seja, 0; string vazia '' e false ainda são valores definidos. Se o primeiro operando tivesse SOMENTE valor de null ou undefined, ele o próximo definido seria retornado.

    //Na prática, devemos utilizar o valor padrão apenas quando a variável é null/undefined. Isto é, quando o valor é realmente desconhecido/não definido

    //Por exemplo, considere isso:
    let altura = 0;

    console.log(altura || 100); //100
    console.log(altura ?? 100); //0

    //Em "altura || 100", ele checa se altura é um valor 'truthy'. Já que 0 é considerado um valor "falsy", ele o ignora e retorna o outro valor.
    //Em "altura ?? 100", é analisado se altura é um valor 'definido', ou seja, se ele não é null/undefined. Nesse caso, ele é um valor definido, então é retornado. O '0' também serve como dado para altura. Dessa forma, ele não é dado como falso.