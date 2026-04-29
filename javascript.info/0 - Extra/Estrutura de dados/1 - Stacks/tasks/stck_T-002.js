/* 
### **Tarefa 2 – Parênteses balanceados (stack com array)**

Crie a função `estaoBalanceados(expr)` que recebe uma string contendo apenas `(` e `)`, e retorna `true` se todos os parênteses abrem e fecham na ordem correta, e `false` caso contrário.

**Exemplos:**

`estaoBalanceados("()")` → `true`

`estaoBalanceados("(()())")` → `true`

`estaoBalanceados("(()")` → `false`

`estaoBalanceados(")(")` → `false`

**Regras:**

- Use apenas um array como pilha.
- Pense: quando você empilha? Quando desempilha? O que significa a pilha estar vazia no final ou durante o processo?
- Teste com strings vazias e com um único parêntese.
*/

//Verifica se todos os parênteses de 'expr' estão balanceados
function estaoBalanceados(expr) {
    let storage = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            storage.push(expr[i]);
        }
        
        if (expr[i] === ')') {
            if (storage.length === 0) {
                return false;
            } else {
                storage.pop();
            }
        }
    }

    return storage.length === 0;
}

console.log(estaoBalanceados("())"));

//Testes
console.log(estaoBalanceados("()"));// `true`

console.log(estaoBalanceados("(()())"));// `true`

console.log(estaoBalanceados("(()"));// `false`

console.log(estaoBalanceados(")("));// `false`