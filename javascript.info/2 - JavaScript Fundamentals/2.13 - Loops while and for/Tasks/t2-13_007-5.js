'use strict';
let n = 20;

primo: for(let i = 2; i <= n; i++){

    for(let j = 2; j < i; j++){
        if(i % j === 0) {
            continue primo;
        }
    }

    console.log(i)
}