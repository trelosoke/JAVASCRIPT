var btt = document.querySelector('button#btt')
var sct = document.querySelector('section#sct')

window.onload = function() {
    document.body.style.visibility = "visible";
}

sct.style.textAlign = 'center'

btt.addEventListener('click', function(){
    var formANO = document.querySelector('input#ano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')

    if(formANO.value.length == 0 || Number(formANO.value) > ano || Number(formANO.value) < 1910){
        alert('Verificação interrompida. Por favor, escreva um ano válido')
    } else {
        var idd = ano - Number(formANO.value)
        var formSex = document.getElementsByName('txSex')
        var gen = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'imge')

        if(formSex[0].checked){
            gen = 'um homem'
            if(idd >= 0 && idd < 12){
                img.setAttribute('src', 'images/bebe-m.png')
            } else if(idd <= 21){
                img.setAttribute('src', 'images/jovem-m.png')
            } else if(idd < 50){
                img.setAttribute('src', 'images/adulto-m.png')
            } else {
                img.setAttribute('src', 'images/idoso-m.png')
            }
        } else if(formSex[1].checked){
            gen = 'uma mulher'
            if(idd >= 0 && idd < 12){
                img.setAttribute('src', 'images/bebe-f.png')
            } else if(idd <= 21){
                img.setAttribute('src', 'images/jovem-f.png')
            } else if(idd < 50){
                img.setAttribute('src', 'images/adulto-f.png')
            } else {
                img.setAttribute('src', 'images/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `És ${gen} de ${idd} anos de idade.`
        res.appendChild(img)
    }
})