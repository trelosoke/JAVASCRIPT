//Identificador de números primos (agora vaikkkk ou não)
/*
let n = 10

nextPrimo:
for(let i = 2; i <= n; i++){

    for(let j = 2; j < i; j++){
        if(i % j === 0){
            continue nextPrimo
        }
    }
    console.log(i)
}

OU
*/

let n = 10

for(let i = 2; i <= n; i++){
    let ehPrimo = true

    for(let j = 2; j < i; j++){
        if(i % j === 0){
            ehPrimo = false
            break
        }
    }
    if(ehPrimo){
        console.log(i)
    }
}

