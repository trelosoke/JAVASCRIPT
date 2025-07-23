'use strict';
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);//Único caso que retorna "false". Esse operador faz com que, caso qualquer um dos operandos sejam true, retorna true.

if(2 || 0){ //true || false
    console.log('E aí.'); //Nesse caso, ambos são tratados como boolean por avaliação.
}

let hora = 9;
let ehFDS = true;

if(hora < 10 || hora > 18 || ehFDS){
    console.log('Fechado. Volte amanhã.'); //Normalmente usado junto com if
}

//OR "||" encontra o primeiro valor "truthy"
let result;
let valor1 = false, 
    valor2 = false, 
    valor3 = true

result = valor1 || valor2 || valor3 //Os valores são avaliados da esqueda para 
// a direita. Caso ele encontre qualquer valor "true" em qualquer posição, 
// toda a expressão se torna true. Caso ele encontre "false", ele vai passar 
// para os próximos valores até chegar no último e vai utilizar o valor do mesmo. 

console.log(result) //true

//boolean-only
let Nome = "";
let sobrenome = "";
let nickname = "SuperDev";

console.log(Nome || sobrenome || nickname || "Anônimo")//Ele vai mostrar o nickname. Caso os três fossem falsy, seria mostrado "Anônimo"

//Avaliação de "curto-circuito" (short-circuit)
true || console.log('Nao') //Ambos são true, mas como ele funciona da direita para a esquerda, para no "true" e não roda o segundo. 
false || console.log('Sim') //O mesmo para "false". Ele parte para o próximo true.