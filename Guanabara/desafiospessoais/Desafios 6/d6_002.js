//Crie uma função ehPar(num) que retorna true se o número for par e false caso contrário.
function ehPar(num){
    if(num % 2 === 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(ehPar(7))