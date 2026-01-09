'use strict';
// Create an object 'person' with properties: firstName (string), lastName (string)
// Add a method 'getFullName' that returns the concatenated name
// Add a method 'initials' that returns first letters (e.g., "John Doe" → "J.D.")

let person = {
    firstName: 'Zé',
    lastName: 'Priquito',

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    initials(){
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }
};

console.log(person.initials());