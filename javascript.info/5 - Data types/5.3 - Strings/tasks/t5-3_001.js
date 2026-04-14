'use strict';
/* 
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
*/

function upperCaseFirst(string) {
    if(!string) return string;

    return string = string[0].toUpperCase() + string.slice(1);
}

console.log(upperCaseFirst("john") == "John");