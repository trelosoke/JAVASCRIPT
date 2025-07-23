//Use um for para gerar e exibir a tabuada do 5 de 1 até 10.
/*

let n1 = 1
while(n1 < 11){
    console.log(`<<---Tabuada do ${n1}--->>`)
    let n2 = 1
    while(n2 < 11){
        console.log(`${n1} x ${n2} = ${n1*n2}`)
        n2++
    }
    n1++
}

*/


for(let n = 1; n <= 10; n++){
    console.log(`<<---Tabuada do ${n}--->>`)
    for(let n1 = 1; n1 <= 10; n1++){
        console.log(`${n} x ${n1} = ${n1*n}`)
    }
}
