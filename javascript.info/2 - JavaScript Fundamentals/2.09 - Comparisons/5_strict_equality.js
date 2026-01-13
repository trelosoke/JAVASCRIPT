'use strict';
//Uma verificação de igualdade regular (==) tem um problema: não consegue diferenciar os tipos, apenas os valores:
console.log(0 == false); //true - 0 é number, false é boolean, mas têm o mesmo valor
console.log('' == false); //true - Mesmo caso

//Isso ocorre porque o == transforma os tipos em number. Para verificações mais profundas, também de tipo, usa-se:

//Strict equality operator ===
    //Em resumo, se "a" e "b" são de tipos diferentes, então a === b retorna falso imediatamente, sem tentar convertê-los em number:0
    console.log(0 === false); //false

    //Há também o operador de diferença estrita (!==):
    console.log(0 !== false); //true