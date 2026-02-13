'use script';
//Declare uma função 'greet' fora de qualquer objeto e atribua-a a dois objetos diferentes. Mostre como 'this' muda dependendo de quem chama.

function greet() {
    console.log("Saudações, " + this.name + "!");
}

let obj = {
    name: 'Gustavo',
    age: 28,
};

let obj2 =  {
    name: 'Leandro',
    age: 26,
};

obj.greet = greet;
obj2.greet = greet;

console.log(obj);
console.log(obj2);

obj.greet();
obj2.greet();
//this muda de acordo com o objeto no qual está trabalhando