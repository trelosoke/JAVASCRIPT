//Peça ao usuário para digitar uma cor e verifique se ela está no array cores usando .indexOf(). Exiba "Encontrado" ou "Não encontrado".

let cores = ['azul', 'rosa', 'verde', 'roxo', 'cinza']

let cor = prompt('Escreva uma cor básica:').toLowerCase()

let posicao = cores.indexOf(cor)

if(posicao !== -1){
    alert(`Achou na posição ${posicao}`)
} else {
    alert('Não encontrado.')
}

console.log(posicao)