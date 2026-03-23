'use strict';
/* 
Crie um objeto `calendar`.

- Implemente `Symbol.toPrimitive(hint)`.
- Se o hint for `"string"`, retorne uma data formatada (ex: `"17/03/2026"`).
- Se o hint for `"number"`, retorne o timestamp (milissegundos).
- Se o hint for `"default"`, retorne a string `"no-hint"`.
- **Teste:**
    1. `alert(calendar)` -> Deve mostrar a data.
    2. `+calendar` -> Deve mostrar o número.
    3. `calendar + 0` -> O que acontece aqui? (Dica: o operador `+` binário usa o hint `"default"`).
*/

let produto = {
    name: 'Semente Anhanguera',
    price: 5.35,

    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return this.name;
        }

        if (hint === "number") {
            return this.price;
        }

        if (hint === "default") {
            return "Produto em estoque";
        }
    },
};

alert(produto);
console.log(+produto);
console.log(produto + 0);