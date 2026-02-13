'use strict';
// Write a function 'copyUser(user)' that returns a shallow copy of a user object
// The function should work for any user object with primitive values

function copyUser(user){
    let clone = {};
    for(let prop in user){
        clone[prop] = user[prop];
    }

    return clone;
}

let user = {
    login: 'papaBosal',
    senha: 'papabossal123'
};

console.log(copyUser(user));