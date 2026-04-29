/* 
Tarefa 1 – Aquecimento: inverter string com array (stack nativa)
Implemente a função inverterString(str) que retorna a string invertida.

Você só pode usar um array vazio e os métodos push() e pop().

Proibido usar reverse(), acessar índices de trás pra frente, ou qualquer outro truque.

O fluxo tem que ser: empilha todas as letras → desempilha uma a uma para montar a string invertida.
*/

function inverterString(string) {
    let letras = [];
    let palavraInvertida = "";

    for (let i = 0; i < string.length; i++) {
        letras.push(string[i]);
    }

    for (let i = 0; i < string.length; i++) {
        palavraInvertida += letras.pop();
    }

    return palavraInvertida;
}

console.log(inverterString("azul"));

//Testes:
console.log(inverterString("abc")); // "cba"
console.log(inverterString("arara")); // "arara"
console.log(inverterString("12345")); // "54321"