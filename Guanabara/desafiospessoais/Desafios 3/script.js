var txt = document.querySelector('div#msge')
var sct = document.querySelector('section#sct')
var h1 = document.querySelector('h1#hdr')


function updDATA(){
    var data = new Date()

    var dd = String(data.getDate()).padStart(2, '0')
    var mm = String(data.getMonth() + 1).padStart(2, '0') 
    var yy = String(data.getFullYear())

    txt.innerHTML = `Data: ${dd}/${mm}/${yy};`
}

function updHORA(){
    var data = new Date()

    var h = String(data.getHours()).padStart(2, '0')
    var min = String(data.getMinutes()).padStart(2, '0')
    var sec = String(data.getSeconds()).padStart(2, '0')

    txt.innerHTML +=` horário: ${h}:${min}:${sec}`
}

setInterval(updDATA, 1000)
setInterval(updHORA, 1000)

window.addEventListener('load', updDATA)
window.addEventListener('load', updHORA)