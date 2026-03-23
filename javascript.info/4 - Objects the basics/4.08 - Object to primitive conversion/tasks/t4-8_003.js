'use strict';
/* 
Muitos desenvolvedores confundem o hint `"number"` com o `"default"`.

- Crie um objeto `price` com uma propriedade `value`.
- No `Symbol.toPrimitive`, retorne o `value` para o hint `"default"`.
- **Teste:** Use `price == 10`. Por que o JS usa o hint `"default"` na comparação com `==` e não o hint `"number"`? Documente isso no seu código.
*/

let price = {
    value: 12,

    [Symbol.toPrimitive](hint) {
        if (hint === "default") {
            return this.value;
        }

        return (hint === "string") ? `R$ ${this.value}` : this.value;
    },
};

console.log(price == 10);