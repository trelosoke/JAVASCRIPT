'use strict';
//System symbols (symbols do sistema)
    //Existem muitos "system" symbols que o JavaScript usa internamente, e podemos usá-los para ajustar vários aspectos de nossos objetos.

    //Eles são listados na especificação na tabela "Well-known symbols":
    Symbol.hasInstance;
    Symbol.isConcatSpreadable;
    Symbol.iterator;
    Symbol.toPrimitive;
    //...e por aí vai.

    //Por exemplo, 'Symbol.toPrimitive' nos permite descrever a conversão de objeto para primitivo. Veremos seu uso bem em breve.

    //Outros symbols também se tornarão familiares quando estudarmos os recursos da linguagem correspondentes.