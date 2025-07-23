let inicio = document.querySelector('input#start')
let final = document.querySelector('input#end')
let passo = document.querySelector('input#pass')

let res = document.querySelector('p#p')
let btt = document.querySelector('button#btt')

btt.addEventListener('click', function(){
    if (inicio.value === ''|| final.value === ''|| passo.value=== ''){
        alert('Complete todas as caixas com números')
        return
    }

    let iNUM = Number(inicio.value)
    let fNUM = Number(final.value)
    let pss = Number(passo.value)
    
    if (iNUM <= 0 || fNUM <= 0 || pss <= 0){
        alert('Digite números maiores que 0!')
        return
    }

    res.innerHTML = ''

    if (iNUM < fNUM){
        while (iNUM < fNUM){
            res.innerHTML += `${iNUM} &rarr; `
            iNUM += pss
        }
    } else if (iNUM > fNUM){
        while (iNUM > fNUM){
            res.innerHTML += `${iNUM} &rarr; `
            iNUM -= pss
        }
    }

    res.innerHTML += "&#x1F3C1"
})