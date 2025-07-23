'use strict';
//What will the code below output?
console.log( console.log(1) || 2 || console.log(3) ); //console.log(1) é rodado 
// por ser o mais à esquerda. Porém, logo depois ele é dado como undefined, 
// então o OR valia o segundo valor. 2 é true, logo a execução para alí.