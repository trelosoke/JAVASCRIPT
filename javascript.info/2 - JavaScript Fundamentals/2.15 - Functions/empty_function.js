'use strict';
function fazNada(){

};

console.log(fazNada() === undefined); //true

function nada(){
    return;
}

console.log(nada() === undefined); //true