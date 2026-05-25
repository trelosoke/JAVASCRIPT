/* 
slug-generator
Contexto real: Você precisa transformar títulos de posts ou produtos em URLs amigáveis (slugs), removendo espaços extras, caracteres especiais conhecidos e formatando tudo com hífens.

Tarefa: Crie uma função generateSlug(title) que:

Remove espaços em branco no início e no fim.

Converte todo o texto para minúsculo.

Substitui espaços por hífens (-). Se houver múltiplos espaços consecutivos, eles devem virar apenas um hífen.

Remove caracteres especiais comuns: !, ?, ., ,, (, ), ", '. Eles devem simplesmente desaparecer, sem deixar vestígios.

Se sobrarem hífens duplicados (ex: --), substitua por um único hífen.

Remove hífens que tenham sobrado no início ou no fim da string final.

Se a string resultante for vazia, retorna string vazia.

Pode usar: trim, toLowerCase, replace, replaceAll, laço.
*/

function generateSlug(title = '') {
    if (typeof title !== 'string') {
        throw TypeError('parameter 1 must be a string');
    }
    
    if (title === '') {
        return '';
    }

    let slug = title.trim().toLowerCase();
    const symbols = ['!', '&', '#', '@', '*', '$', '%', '(', ')','[',']', '{', '}', '^', '~', ',', '.', ',', ';', ':', '/', '\\', '?', 'º', 'ª', '|', '-'];

    if (slug.includes('ç') === true) {
        slug = slug.replaceAll('ç', 'c');
    }

    for (let i = 0; i < symbols.length; i++) {
        slug = slug.replaceAll(symbols[i], '');
    }

    return slug.split(' ').filter(word => word !== '').join('-');
}

//Testes:
console.log(generateSlug("10 Dicas de JavaScript!"));       // "10-dicas-de-javascript"
console.log(generateSlug("   O que é HTML?   "));           // "o-que-é-html"
console.log(generateSlug("Mãe & Filho (Lançamento)"));      // "mãe--filho-lançamento"
console.log(generateSlug("---Espaços e Hífens---"));        // "espaços-e-hífens"
console.log(generateSlug("aaa       s"));                               // ""