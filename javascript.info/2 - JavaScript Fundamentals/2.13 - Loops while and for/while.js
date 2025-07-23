'use strict';
let i = 0;
while (i < 3){
    console.log(i);
    i++
}; // uma única execução do loop é chamada de iteração. Esse loop acima faz 3 iterações.

let i2 = 3;
while (i2) { //= i2 != 0
    console.log(i2);
    i2--
};

let i3 = 3;
while (i3) console.log(i3--) //Sem {} para loops de única linha (opcional)