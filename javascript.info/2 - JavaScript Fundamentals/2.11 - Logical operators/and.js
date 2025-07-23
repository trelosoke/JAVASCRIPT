'use strict';
console.log(true && true); //Somente esse caso retorna true. Ambos devem ser verdadeiros.
console.log(false && false);
console.log(true && false);
console.log(false && true);

let hora = 12;
let minuto = 30;

if(hora == 12 && minuto == 30){
    console.log("São 12:30!");
}

if (1 && 0){ //Qualquer valor é permitido como operando
    console.log('Não funciona, pois 0 é "falsy"');
}

//E "&&" encontra o primeiro valor "falsy"
let resultado;
let valor1 = true,
    valor2 = true,
    valor3 = false;

resultado = valor1 && valor2 && valor3 //Analisa da esquerda para a direita. Caso haja algum valor falsy pelo caminho, ele para ali e determina toda a expressão como "false". Caso não, ele retorna o valor boolean do último operando 
console.log(resultado)

console.log(1 && 0); //Se o primeiro é truthy, ele retorna o segundo operando.
console.log(1 && 5); //Aqui idem.

console.log(null && 5); //Se o primeiro é falsy, ele é retornado e os outros são 
// ignorados
console.log(0 && 3); //Aqui idem.

console.log(1 && 2 && 3); //Caso todos sejam true, o último valor é retornado.

1 && 2 || 3 && 4; //A precedência do && é maior do que ||. Logo, || não anula && 
// e não necessita parenteses ().