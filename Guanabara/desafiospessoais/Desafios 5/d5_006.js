//Crie um array chamado frutas com 5 nomes de frutas diferentes. Use um loop for para exibir cada fruta no console junto com sua posição no array, no formato: "Fruta [posição]: [nome]"

let frutas = ["banana", "apple", "grape", "avocado", "strawberry"]

for(let fruta = 0; fruta < frutas.length; fruta++){
    console.log(`Fruta ${fruta}: ${frutas[fruta]}`)
}