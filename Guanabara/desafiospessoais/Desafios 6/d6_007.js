//Escreva uma função adicionarNoFinal(array, elemento) que adiciona o elemento ao final do array e retorna o array atualizado.
function adicionarNoFinal(array, elemento){
    array.push(elemento)
    return array 
}

console.log(adicionarNoFinal([2, 5, 7], 0))