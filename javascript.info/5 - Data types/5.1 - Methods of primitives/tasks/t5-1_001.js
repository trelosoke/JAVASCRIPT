// Consider the following code:

let str = "Hello";

str.test = 5;

console.log(str.test);
// What do you think, will it work? What will be shown?

//Não funcionará, pois um primitivo não é convertido para objeto dessa maneira. E quando é, ele não permanece objeto. Retornará um erro de quer 'str' não é um objeto (na verdade retorna 'undefined');