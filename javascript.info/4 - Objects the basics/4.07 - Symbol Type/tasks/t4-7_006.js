'use strict';
/* 
Como mencionado no livro, o JavaScript usa Symbols internos para configurar objetos. O `Symbol.toPrimitive` permite que você defina como seu objeto se transforma em algo simples (como número ou string) dependendo da situação.

**O Desafio:**
Crie um objeto `wallet` (carteira) que tem uma propriedade `money: 500`.
Adicione o `Symbol.toPrimitive` de modo que:

- Se o JavaScript tentar converter o objeto para **"number"**, ele retorne o valor de `this.money`.
- Se tentar converter para **"string"**, ele retorne `"R$ " + this.money`.
*/

