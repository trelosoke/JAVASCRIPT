'use strict';
let idade = 18;

let mensagem = (idade <= 3)? 'Olá, babê!' : (idade > 3 && idade <= 18)? 'Olá, grandão!' : (idade >18 && idade <= 100)? 'Olá, grandinho.' : 'Você é muito velho';

console.log(mensagem);

//Mesma coisa que:
if(idade <= 3){
    console.log('Olá, bebê!');
} else if(idade > 3 && idade <= 18){
    console.log('Olá, grandão!')
} else if(idade > 18 && idade <= 100){
    console.log('Olá, grandinho.')
} else {
    console.log('Você é muito velho.')
}

//Uso não tradicional
let empresa = 'Netscape';

(empresa == 'Netscape')?
    console.log('Certo') : console.log('Errado'); //Não use assim, use 'if-else'