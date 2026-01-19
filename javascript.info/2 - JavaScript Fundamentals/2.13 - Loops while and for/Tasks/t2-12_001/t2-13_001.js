'use strict';
//What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  console.log( i-- );
}

//3, 2, 1. O valor inicial de 'i' é 3. A condição do loop diz: enquanto i == true. Logo, 3 é true, então console.log( i-- ); é rodade. Mas como é 'i--', primeiro o valor atual de 'i' retorna, depois diminui por um. Isso se repete até 'i' ser 0 (false), quando o loop para e dá controle para a próxima linha depois dele.