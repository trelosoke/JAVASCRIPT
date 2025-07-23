//O exercício 5 consiste em pedir ao usuário um número e calcular a soma de todos os números de 1 até esse número.

let num = 5

if (num > 0){
    let soma = 0
    let procss = ''

    for(let i = 1; i <= num; i++){
        soma += i

        if(i === 1){
            procss += `${i} `
        } else {
            procss += `+ ${i} `
        }
    }
    console.log(`${procss} = ${soma}`)
}