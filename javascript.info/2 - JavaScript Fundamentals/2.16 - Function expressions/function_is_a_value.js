function sayHi(){
	console.log('ujhkskdk')
}
console.log(sayHi); //A função não foi chamada. 

let func = sayHi;

func();
sayHi();