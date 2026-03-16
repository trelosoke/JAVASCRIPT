'use strict';
//Tipo "Symbol"    
    //Pela especificação (ECMA), apenas dois tipos primitivos podem servir como chaves de propriedades de objetos:
        // - tipo 'string', ou
        // - tipo 'symbol'.

    //Caso contrário, se alguma usar outro tipo, como number, é automaticamente convertido para string. Portanto, 'obj[1]' é o mesmo que 'obj["1"]', e 'obj[true]' o mesmo que 'obj["true"]'.

    //Até agora estivemos utilizando somente strings. Vamos então estudar 'symbols', ver o que eles podem fazer por nós.