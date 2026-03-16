'use strict';
/* 
O método `Symbol.keyFor` faz o inverso do `Symbol.for`.

1. Crie um Symbol global para `"app.id"`.
2. Use `Symbol.keyFor` para recuperar o nome `"app.id"` a partir da variável do Symbol.
3. Tente usar `Symbol.keyFor` em um Symbol **local** (criado apenas com `Symbol()`). O que acontece?
*/

let globalSymbol = Symbol.for("app.id");
console.log(Symbol.keyFor(globalSymbol)); //app.id

let localSymbol =  Symbol("app.id"); 
console.log(Symbol.keyFor(localSymbol)); //retorna 'undefined'