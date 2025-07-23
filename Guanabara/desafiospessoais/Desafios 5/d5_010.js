/*
Crie um array chamado frutas com 5 nomes de frutas. Peça ao usuário para digitar uma fruta usando prompt() e verifique se ela está no array utilizando .indexOf(). Se existir, exiba no console a mensagem "Ótima escolha! [fruta] está na posição [índice] do nosso estoque.". Caso contrário, mostre "Parece que não temos [fruta] no estoque. Que tal tentar outra?".

Use toLowerCase() para garantir que a comparação funcione mesmo se o usuário digitar com letras maiúsculas ou minúsculas.
*/
let frutas = ['banana', 'uva', 'maçã', 'laranja', 'abacate']

let fruta = prompt('Digite o nome de alguma fruta').toLowerCase()

let verf = frutas.indexOf(fruta)

if(verf !== -1){
    alert(`Acertou, ótima escolha! A fruta ${fruta} está na posição ${verf} do nosso estoque.`)
} else {
    alert(`Parece que não temos ${fruta} no estoque. Que tal tentar outra?`)
}