/* 
Tarefa 2 – Remover duplicatas de um array
Crie uma função removeDuplicados(arr) que recebe um array e retorna um novo array sem elementos duplicados, usando exclusivamente um Set nativo.

Restrição: não use loops para verificar duplicatas manualmente – delegue ao Set.
*/

function removeDuplicados(arr = []) {
    let set = new Set();
    let arraySet = [];

    arr.forEach(function(valor) {
        set.add(valor);
    });

    set.forEach(function(valor) {
        arraySet.push(valor);
    })

    return arraySet;
}

//Testes:
console.log(removeDuplicados([1, 2, 2, 3, 4, 4, 4])); //[1, 2, 3, 4]
console.log(removeDuplicados(['a', 'b', 'a', 'c'])); //['a', 'b', 'c']