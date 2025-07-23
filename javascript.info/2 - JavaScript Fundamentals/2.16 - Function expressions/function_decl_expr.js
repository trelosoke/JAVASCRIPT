'use strict';
// let age = +prompt('Qual sua idade?');

// if(age < 18){
//   function welcome(){
//     alert('Permissão negada');
//   }
// } else {
//   function welcome(){
//     alert('Permissão concedida')
//   }
// }

// welcome(); //Isso não funciona, pois as funções só podem ser chamadas no próprio 
// bloco nas quais estão inseridas.
let age = +prompt('Qual sua idade?');

let message;
if(age < 18){
  message = function(){
    alert('Permissão negada');
  } 
} else {
  message = function(){
    alert('Permissão concedida');
  }
}

message();
// let welcome = (age < 18) ? 
//                 function() {alert('Permissão negada');} : 
//                 function() {alert('Permissão concedida');};

//Moral: sempre use Function Declaration. Caso não seja possível, use expression.