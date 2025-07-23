//Exiba todos os números ímpares de 1 a 50 usando um while.
let n = 1
while(n <= 50){
    if(n % 2 === 0){
        n++
        continue
    }
    console.log(n)
    n++
}