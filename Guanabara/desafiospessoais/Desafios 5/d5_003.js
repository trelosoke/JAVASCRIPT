//Adicione um número no início do array numeros sem usar .push() (atribuição direta por índice) e exiba-o.

let vetor = [2, 3, 4]

for(let i = vetor.length; i > 0; i--){
    vetor[i] = vetor[i-1]
}

vetor[0] = 1

console.log(vetor)