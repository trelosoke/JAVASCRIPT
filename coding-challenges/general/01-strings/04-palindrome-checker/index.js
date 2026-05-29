/* 
### **palindrome-checker**

**Contexto real:** Você quer verificar se uma palavra é palíndromo, ignorando diferenças entre maiúsculas e minúsculas.

**Tarefa:** Crie uma função `isPalindrome(palavra)` que retorna `true` se a palavra for palíndromo (igual de trás para frente), considerando case‑insensitive.

**Pode usar:** `toLowerCase`, `reverseString` (se quiser reaproveitar a função anterior), `charAt`.
*/

function isPalindrome(word = '') {
    const lowerWord = word.toLowerCase();
    return lowerWord === lowerWord.split('').reverse().join('');
}

//**Testes:**
console.log(isPalindrome("Arara"));  // true
console.log(isPalindrome("Aranha")); // false
console.log(isPalindrome("Osso"));   // true
console.log(isPalindrome("Radar"));  // true