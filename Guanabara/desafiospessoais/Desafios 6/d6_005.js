//Faça uma função buscarNome(array, nome) que procura um nome no array e retorna sua posição ou 1 se não encontrar.

function buscarNome(array, nome){
    let i = 0
    while(array[i] !== undefined) i++
    return i
}

console.log(buscarNome(['joelho', 'pai', 'papai!'], 'papai'))

/*

OU

function buscarNome(array, nome){
    return array.indexOf(nome)
}

console.log(buscarNome(['rosa', 'amarelo', 'verde', 'ciano'], 'amarelo'))
*/