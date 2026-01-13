'use strict';
//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let nameJS = prompt('Qual o nome "oficial" do JavaScript?');

if (nameJS == 'ECMAScript'.toLowerCase()) {
    alert('Correto!');
} else {
    alert('Você não sabe? É ECMAScript!');
}