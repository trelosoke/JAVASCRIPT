'use strict';
for(let i = 0; i < 3; i++){
    console.log(i);
}; //Variáveis definidas dentro de loops não funcionam fora dele.

//Quebrando partes
let i2 = 0;

for(; i2 < 3; i2++){
    console.log(i2);
}

for(; i2 < 3;){
    console.log(i++)
}

for(;;){
    //Sem limites
}