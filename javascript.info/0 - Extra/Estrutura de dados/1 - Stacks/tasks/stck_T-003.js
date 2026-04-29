/* 
### **Tarefa 3 – Remover duplicados adjacentes (usando peek)**

Implemente `removerDuplicadosAdjacentes(str)` que recebe uma string e remove repetidamente todos os pares de letras iguais consecutivas até que não sobre nenhum par.

**Exemplo:**

`"abbaca"` – remove `"bb"` → `"aaca"` – remove `"aa"` → `"ca"`

Resultado: `"ca"`

**Dicas:**

- Use um array como pilha.
- A cada letra, você precisa olhar o **topo da pilha** (acessar o último elemento). Se for igual ao caractere atual, você desempilha; senão, empilha.
- No final, junte os elementos restantes da pilha para formar a string final.
*/

//Remove elementos duplicados dado um 'str'
function removerDuplicadosAdjacentes(str) {
    let storage = [];

    //Verifica cada elemento de str através de um loop
    for (let i = 0; i < str.length; i++) {

        //Dá push caso o último elemento da stack for diferente do elemento avaliado
        //Dá pop caso isso não seja verdadeiro
        if (storage[storage.length - 1] !== str[i]) {
            storage.push(str[i]);
        } else {
            storage.pop();
        }
    }

    return storage.join(''); //
}

//Testes:
console.log(removerDuplicadosAdjacentes("abbaca")); //"ca"

console.log(removerDuplicadosAdjacentes("azxxzy")); //"ay"