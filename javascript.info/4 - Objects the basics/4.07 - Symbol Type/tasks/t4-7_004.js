'use strict';
/* 
Imagine que você tem dois arquivos diferentes no seu projeto e ambos precisam acessar EXATAMENTE o mesmo Symbol de "login".

1. Crie um Symbol no registro global com a chave `"auth"` usando `Symbol.for()`.
2. Em outra variável, tente acessar o mesmo Symbol usando a mesma chave.
3. Compare as duas variáveis. Elas são iguais? (Diferente da Tarefa 1, aqui elas devem ser).
*/

let globalAuth = Symbol.for("auth");
let authGlobal = Symbol.for("auth");

console.log(globalAuth === authGlobal); //true