/* 
### **abbreviate-full-name**

**Contexto real:** Você precisa formatar nomes completos para exibição compacta, abreviando nomes do meio, exceto preposições como "da", "de", "do", "das", "dos".

**Tarefa:** Crie uma função `abbreviateName(nome)` que transforma um nome completo em "Nome + iniciais dos sobrenomes", ignorando as preposições listadas. Se houver apenas duas palavras, mantenha o nome sem abreviar.

**Pode usar:** `split`, `slice`, `toUpperCase`, `join`, condicionais.
*/

function abbreviateName(name = '') {
    const nameSplit = name.split(' ');
    const prepositions = ['do', 'da', 'dos', 'das', 'de'];

    for (let i = 1; i < nameSplit.length - 1; i++) {
        if (!prepositions.includes(nameSplit[i])) {
            nameSplit[i] = nameSplit[i].charAt(0).toUpperCase() + '.';
        }
    }

    return nameSplit.join(' ');
}

//**Testes:*
console.log(abbreviateName("João Carlos da Silva"));   // "João C. da Silva"
console.log(abbreviateName("Maria de Souza Lima"));    // "Maria de S. Lima"
console.log(abbreviateName("Pedro Henrique"));         // "Pedro Henrique"
console.log(abbreviateName("Ana das Couves Pereira")); // "Ana das C. Pereira"
console.log(abbreviateName("José dos Santos Almeida"));     // "José dos S. Almeida"
console.log(abbreviateName("Ana Maria da Silva Souza"));    // "Ana M. da S. Souza"
console.log(abbreviateName("Pedro"));                       // "Pedro" (nome único)