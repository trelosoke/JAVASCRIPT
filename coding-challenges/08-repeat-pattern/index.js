/* 
repeat-pattern
Contexto real: Você precisa gerar padrões repetidos para testes de layout, placeholders ou formatação de saída, unindo uma sequência que se repete com um separador controlado.

Tarefa: Crie uma função repeatPattern(pattern, times, separator) que:

Gera uma string onde o pattern aparece repetido times vezes.

Entre cada repetição do pattern, insere o separator.

O separator não deve aparecer antes da primeira repetição nem depois da última.

Remove espaços em branco no início e no fim do resultado final.

Se pattern for uma string vazia ou times for 0, retorna uma string vazia.

Pode usar: repeat, trim, slice, condicionais.
*/

function repeatPattern(pattern, times, separator) {
    if (typeof pattern !== 'string') throw new TypeError('pattern must be a string');
    if (typeof times !== 'number') throw new TypeError('times must be a string');
    if (typeof separator !== 'string') throw new TypeError('separator must be a string');

    if (pattern === '' || times === 0) {
        return '';
    }
    
    let repeatedPattern = (pattern.trim() + separator).repeat(times);

    //Garante que retorne todo o padrão, mesmo se o separador for string vazia
    return repeatedPattern.slice(0, repeatedPattern.length - separator.length);
}

//Testes:
console.log(repeatPattern("ab", 3, "-"));   // "ab-ab-ab"
console.log(repeatPattern("*", 5, " "));    // "* * * * *"
console.log(repeatPattern("xyz", 0, ","));  // ""
console.log(repeatPattern("x", 4, ""));     // "xxxx"
console.log(repeatPattern("  oi  ", 2, "|")); // resultado final com espaços removidos nas pontas