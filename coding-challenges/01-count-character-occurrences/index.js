/* 
### count-character-occurrences

Contexto real: Você precisa saber quantas vezes uma letra específica aparece em um texto, sem usar laços prontos como forEach ou for...of.

Tarefa: Crie uma função countLetter(texto, letra) que retorna o número de ocorrências da letra no texto, usando indexOf com o segundo argumento para repetir a busca.

Pode usar: indexOf, segundo argumento do indexOf, laço while.
*/

let isLetter = /^\p{L}+$/u;
function countLetter(txt = '', letter = '') {

    if (typeof txt !== 'string') {
        throw new TypeError('parameter 1 is not of type \'String\'');
    }

    if (typeof letter !== 'string') {
        throw new TypeError('parameter 2 is not of type \'String\'')
    }
    
    if (letter.length > 1 || !isLetter.test(letter)) {
        return undefined;
    }

    let letterCounter = 0;
    let position = txt.indexOf(letter);
    while (position !== -1) {
        ++letterCounter;
        position = txt.indexOf(letter, position + 1);
    } 

    return letterCounter;
}

console.log(countLetter('abacate', 'a'));

//Testes:

// console.log(countLetter("abacaxi", "a")); // 3
// console.log(countLetter("javascript", "a")); // 2
// console.log(countLetter("javascript", "z")); // 0