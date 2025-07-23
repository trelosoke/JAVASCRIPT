//Crie um array pares que contenha apenas os números pares do array numeros (use loop for).

let numeros = [16, 6, 21, 4, 12]

let pares = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}

console.log(pares)