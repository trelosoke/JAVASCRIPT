'use strict';
//Using the if..else construct, write the code which asks: 
// ‘What is the “official” name of JavaScript?’ If the visitor enters “ECMAScript”,
//  then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let nomeOfc = prompt('Qual o nome "oficial" do JavaScript?').toLowerCase();

if(nomeOfc == 'ecmascript'){
    alert('Correto');
} else {
    alert('Não sabes? É ECMAScript.')
}