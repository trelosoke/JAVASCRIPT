/* 
### **reverse-string-algorithm**

**Contexto real:** Você precisa implementar uma função que reverta uma string sem depender de métodos prontos de array.

**Tarefa:** Crie uma função `reverseString(texto)` que retorna a string invertida.

**Pode usar:** `charAt` ou `slice`, laço `for`.

**Restrição:** Não use `split`, `join` nem `reverse`.
*/

function reverseString(str = '') {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i); 
    }
    return reversedStr;
}

//**Testes:**
console.log(reverseString("abcd"));  // "dcba"
console.log(reverseString("12345")); // "54321"
console.log(reverseString(""));      // ""