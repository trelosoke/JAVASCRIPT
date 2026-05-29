/* 
### **capitalize-words**

**Contexto real:** Você tem nomes ou títulos digitados de forma irregular e precisa padronizar a capitalização.

**Tarefa:** Crie uma função `capitalizeWords(frase)` que retorna a frase com a primeira letra de cada palavra em maiúscula e as demais em minúscula. Palavras são separadas por espaços.

**Pode usar:** `split`, `slice`, `toUpperCase`, `toLowerCase`, `join`.
*/

function capitalizeWords(sentence = '') {
    const spaceSplit = sentence.split(' ');
    let capitalized = '';

    for (let i = 0; i < spaceSplit.length; i++) {
        spaceSplit[i] = spaceSplit[i].charAt(0).toUpperCase() + spaceSplit[i].slice(1).toLowerCase();
    }

    return spaceSplit.join(' ');
}

console.log(capitalizeWords('Banana e pêra são frutas excelentes.'));
//**Testes:**
// console.log(capitalizeWords("ola mundo"));            // "Ola Mundo"
// console.log(capitalizeWords("FELIZ ANIVERSARIO"));    // "Feliz Aniversario"
// console.log(capitalizeWords(" javaSCRIPT é legal ")); // " Javascript É Legal "