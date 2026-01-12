'use strict'
//alert
alert('Hello');
//Mensagem que aparece em uma pequena janela no navegador, em algum site. É chamada de "janela modal", significando que o usuário não pode interagir com o site até a janela fechar. Nesse caso, apertando "Ok".

//prompt (retorna o que foi escrito; modal)
let idade = prompt('Quantos anos tens?', 20);

alert(`Você tem ${idade} anos!`)

//confirm (true ou false; modal)
let isAdmin = confirm('És o administrador?'); 
alert(isAdmin); //true se apertar "Ok"

//Limitações
//A localização e a aparência dessas janelas são definidas exclusivamente pelo navegador usado.