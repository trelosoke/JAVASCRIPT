let num = document.querySelector('input#numr')

let slct = document.querySelector('select#slct')

let btt = document.querySelector('button#btt')

btt.addEventListener('click', function(){
    if (num.value === ''){
        alert('Digite algum número')
        return
    }

    let n = Number(num.value)
    

    if (n <= 0){
        alert('Digite um número maior que 0!')
        return
    }
    
    slct.innerHTML = ''
    for(let n1 = 1; n1 <= 10; n1++){
        let opt = document.createElement('option')
        opt.text = `${n} x ${n1} = ${n*n1}`
        opt.value = `tab ${n1}`
        slct.appendChild(opt)
    }
})