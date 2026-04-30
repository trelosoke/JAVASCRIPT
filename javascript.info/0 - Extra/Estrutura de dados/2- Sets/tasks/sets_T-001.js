/* 
Tarefa 1 – Aquecimento: Set nativo (ES6)
Use o objeto Set do JavaScript para realizar as seguintes operações:

js
const meuSet = new Set();
Etapas obrigatórias (sem pressa):

Adicione os números 1, 2, 2, 3, 4, 4, 4.

Verifique o tamanho do set (quantos elementos únicos restaram).

Teste se o set tem o número 2 e o número 5.

Remova o número 3.

Converta o set em um array usando Array.from() ou spread ([...meuSet]).

Itere sobre o set com for...of e imprima cada valor.

Testes manuais: confirme cada etapa exibindo no console o estado intermediário.
*/

const meuSet = new Set();

meuSet.add(1);
meuSet.add(2);
meuSet.add(2);
meuSet.add(3);
meuSet.add(4);
meuSet.add(4);
meuSet.add(4);

console.log(meuSet);

console.log(meuSet.size); //4

console.log(meuSet.has(2)); //true
console.log(meuSet.has(5)); //false

console.log(meuSet.delete(3));

let setArray = [];
meuSet.forEach(function(value) {
    setArray.push(value);
})

console.log(setArray); //1, 2, 4

for (let elem of meuSet) {
    console.log(elem);
}