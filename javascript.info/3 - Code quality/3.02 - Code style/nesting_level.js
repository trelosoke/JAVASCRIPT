'use strict';
//Evitar mais um nível de aninhamento sempre que possível.
for (let i = 0; i < 10; i++) {
  if (cond) {
    //... // <- one more nesting level
  }
} 
//Nesse exemplo, ao invés de fazer isso (*)

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  //...  // <- no extra nesting level
} 
//(*)Faça isso

//Ou, nesse exemplo abaixo
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

//Ao invés de colocar o else, tire-o e coloque um return no bloco de condição, 
//Assim, caso (n < 0) for verdadeiro, vai rodar o código e parar assim que
//chegar em "return". Segue abaixo:
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//Assim temos menos níveis de aninhamento e o código fica mais legível.