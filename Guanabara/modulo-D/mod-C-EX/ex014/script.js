var h1 = document.querySelector('h1#hdr')
var img = document.querySelector('img#imge')
var txt = document.querySelector('div#msge')
var sct = document.querySelector('section#sct')

window.onload = function(){
    document.body.style.visibility = "visible"
}

function updHORA(){
    var data = new Date()
    var h = String(data.getHours()).padStart(2, '0')
    var min = String(data.getMinutes()).padStart(2, '0')
    var sec = String(data.getSeconds()).padStart(2, '0')
    
    txt.innerText = `São ${h}:${min}:${sec}! `

    if(h >= 6 && h < 12){
        document.body.style.background = '#f2af5c'
        sct.style.background = '#a17352'
        txt.innerHTML += 'Pausa pro cafezinho!'
        img.src = 'images/Manha.png'
        h1.innerText = 'Manhã'
        h1.style.background = '#a17352'
    } else if (h >= 12 && h < 18){
        document.body.style.background = '#F28907'
        sct.style.background = '#ffffff'
        txt.innerHTML += 'Tenha uma bela tarde!'
        img.src = 'images/Tarde.png'
        h1.innerText = 'Tarde'
        h1.style.background = '#F25C05'
    } else if (h >= 18 && h < 24){
        document.body.style.background = '#0D0D0D'
        sct.style.background = '#315259'
        txt.innerHTML += 'Boa noite e bom descanso!'
        img.src = 'images/Noite.png'
        h1.innerText = 'Noite'
        h1.style.background = '#315259'
    } else {
        document.body.style.background = '#121214'
        sct.style.background = '#202024'
        img.src = 'images/Madrugada.png'
        txt.innerHTML += `Vai dormir, cara!`
        h1.innerHTML = 'Madrugada'
        txt.style.color = 'white'
        h1.style.background = '#202024'
    }
}

setInterval(updHORA, 1000)
window.addEventListener('load', updHORA)