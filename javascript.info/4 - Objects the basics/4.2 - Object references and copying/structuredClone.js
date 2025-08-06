//Clonando com propriedades aninhadas
let user = { 
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let userClone = structuredClone(user);

console.log(user.sizes == userClone.sizes); //false

user.sizes.width = 60;
console.log(userClone.sizes.width); //Agora é verdadeiramente um clone

//Clonando referência ao proprio objeto
let user2 = {};
user2.me = user2;

let clone = structuredClone(user2);
console.log(clone.me == clone); //referencia clone, não user.

//structuredClone não funciona em funções
structuredClone({
  f: function() {}
});
