//Crie uma função contarElementos(array) que retorna a quantidade de elementos no array (sem usar .length).
function contarElementos(array){
    let i = 0
    while(array[i]) i++
    return i
}

console.log(contarElementos([1, 2, 4]))