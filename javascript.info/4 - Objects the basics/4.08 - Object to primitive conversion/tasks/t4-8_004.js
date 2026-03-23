'use strict';
/* 
A conversão de objeto para primitivo não é necessariamente o fim da linha.

- Crie um objeto `input` que, ao ser convertido para primitivo (qualquer hint), retorne a string `"42"`.
- **Teste:** Execute `let result = input * 1`.
- **Explicação:** Entenda o fluxo: `Objeto` -> `Primitivo (string "42")` -> `Número (42)`. O JS continua convertendo até chegar no tipo exigido pelo operador matemático.
*/

let input = {
    toString() {
        return "42";
    },
};

let result = input * 1;
alert(input); //"42"
console.log(result); //42