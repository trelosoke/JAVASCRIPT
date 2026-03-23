'use strict';
/* 
O objetivo aqui é entender que o JS tenta um método, e se ele não existir, tenta o outro.

- Crie um objeto `user` que **não** tenha `Symbol.toPrimitive`.
- Implemente apenas o `toString`.
- **Teste:** Tente fazer uma operação aritmética com ele (ex: `user * 2`).
- **Observação:** Note que, mesmo para um hint `"number"`, o JS usará o `toString` se o `valueOf` não estiver presente ou não retornar um primitivo.
*/

let user = {
    name: 'John',
    toString(){
        return "100";
    },
};

console.log(user * 2);