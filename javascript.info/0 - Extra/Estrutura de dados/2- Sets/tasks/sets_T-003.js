/* 
Tarefa 3 – Caracteres únicos em uma string
Implemente todosCaracteresUnicos(str) que retorna true se a string não tiver nenhum caractere repetido, e false caso contrário.

Exemplos:
todosCaracteresUnicos("abc") → true
todosCaracteresUnicos("abca") → false
todosCaracteresUnicos("") → como deve se comportar? (decida e justifique)

Restrição: use um Set nativo para rastrear os caracteres já vistos.
*/

function todosCaracteresUnicos(str = '') {
    if (str === "") {
        return undefined; //retorna undefined, já que o usuário não definiu nenhum caractere
    }

    let caracteresUnicos = new Set();

    for (let elem of str) {
        caracteresUnicos.add(elem);
    }

    return caracteresUnicos.size === str.length; 
}

console.log(todosCaracteresUnicos("abc"));
console.log(todosCaracteresUnicos("abca"));
console.log(todosCaracteresUnicos(""));