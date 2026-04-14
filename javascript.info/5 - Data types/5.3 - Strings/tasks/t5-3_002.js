'use strict';
/* 
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
*/

function checkSpam(string) {
    let lowerString = string.toLowerCase();
    return lowerString.includes("viagra") || lowerString.includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));