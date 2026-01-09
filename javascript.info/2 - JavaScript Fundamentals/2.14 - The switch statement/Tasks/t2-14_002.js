'use strict';
//Rewrite the code below using a single switch statement:
let a = 2;

/*
if (a == 0) {
    console.log( 0 );
}
if (a == 1) {
    console.log( 1 );
}

if (a == 2 || a == 3) {
    console.log( '2,3' );
}
*/

switch(a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1)
    case 2 || 3:
        console.log('2, 3');
}