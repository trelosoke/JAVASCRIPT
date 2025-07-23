//Crie uma função calcularMedia(array) que calcula a média dos números de um array.
function calcularMedia(array){
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma / array.length
}

console.log(calcularMedia([1, 5, 7, 2]))