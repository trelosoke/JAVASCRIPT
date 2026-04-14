'use strict';
/* 
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:
*/


function truncate(string, maxlength) {
    let newString = string.slice(0, maxlength - 1);
    return ((string.length > maxlength) ? newString + "…" : string);

}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));