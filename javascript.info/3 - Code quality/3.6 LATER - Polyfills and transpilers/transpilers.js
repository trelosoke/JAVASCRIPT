'use strict';
//Traduz um código-fonte para outro código-fonte. É capaz de ler e 
//entender (parse) códigos modernos e reescrevê-los em sintaxes mais antigas.

//Por exemplo, antes do ES2020, não existia o operador "??". O transpilador transforma o código moderno para uma sintaxe mais antiga para que engines antigas consigam executá-lo
let height;

//Antes do transpiler
height = height ?? 100;

//Após o transpiler
height = (height !== undefined && height !== null) ? height : 100;

//Babel é o mais utilizado
//https://babeljs.io/