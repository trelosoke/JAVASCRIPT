'use strict';
// for(key in object){
    //executa para cada 'key' que percorre o objeto
// }

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user){
    //keys
    console.log(key); //name, age, isAdmin
    //valores das keys
    console.log(user[key]); //John, 30, true
}


//Objetos ordenados
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
//Ele retorna na ordem dos números inteiros. Caso não queira, basta adicionar 
//um "+" na frente desses números. Assim, serão mostrados na ordem de criação.