'use strict';

console.log("6" / "2"); //Operadores convertem automaticamente para NUMBER

let str = "123";
console.log(typeof str);

str = Number(str);
console.log(typeof str);

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );
console.log( Number(null) );
console.log( Number(undefined));