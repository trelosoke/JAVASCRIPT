//Calcular a média de n valores digitados pelo usuário. O programa deve encerrar o processamento e exibir quando for digitado o valor 999. Ao final deve exibir a quantidade de valores digitados, a soma de todos os valores e a média.

let res1 = document.querySelector('p#tx1')
let res2 = document.querySelector('p#tx2')
let res3 = document.querySelector('p#tx3')

let nS = document.querySelector('p#nS')

let n

let soma = 0
let cont = 0

do{
    n = Number(prompt('Digite um número diferente de 999. Quando estiver satisfeito, digite o 999.'))

    if(n === 0){
        alert('Números diferentes de 0!')
        continue
    }

    soma += n
    cont++

    nS.innerHTML += `Número ${cont}: ${n}; `
    
}while (n != 999)

res1.innerHTML = `Soma: ${soma}; `
res2.innerHTML = `Quantidade de números: ${cont}; `
res3.innerHTML = `Média: ${(soma/cont).toFixed(1)}`