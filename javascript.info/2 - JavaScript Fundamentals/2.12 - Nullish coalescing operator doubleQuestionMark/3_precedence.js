'use strict';
//Precedência
    //A precedência de NCO '??' é a mesma do OR '||'. Ambos iguais a 3 na table MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

    //Isso significa que ele é avaliado antes do ? e do =, porém depois da maioria das operações (+, -, *, /).
    //Então, é importante usarmos parênteses em expressões como essa:
    let altura = null;
    let largura = null;

    let area = (altura ?? 100) * (largura ?? 50);

    console.log(area); //5000

    //Caso contrário, sem os parênteses, a multiplicação ocorreria primeiro.

//Usando '??' com '&&' ou '||'
    //Por razões de segurança, o JavaScript não permite o uso de '??' com '&&' e '||', a não ser que a procedência seja explicitamente especificada com o uso de parênteses:

    //let x = 1 && 2 ?? 3; --- Erro de sintaxe

    let x = (1 && 2) ?? 3; //Qual desses, da esqueda para a direita, é falso(&&)? Nenhum. Logo, retorna o último operando (2). Qual desses, da esquerda para a direita, é definido(??)? Ambos. Logo, retorna o primeiro termo.
    console.log(x); //2

    //Feito para evitar erros quando as pessoas estávam mudando de '||' para '??'