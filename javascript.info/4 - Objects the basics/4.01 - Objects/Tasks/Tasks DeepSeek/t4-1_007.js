// Create an object 'student' with properties: name (string), age (number), hasScholarship (boolean)
// Add a method 'describe' that returns: "[name] is [age] years old and [has/has not] scholarship"
'use strict';
// Example: If hasScholarship=true → "John is 20 years old and has scholarship"
let student = {
    name: 'Rafael',
    age: 19,
    hasScholarship: true,

    describe(){
        let schoolCheckPhrase = this.hasScholarship ? 'has' : 'has not';
        if(this.hasScholarship === true){
            return `${this.name} is ${this.age} years old and ${schoolCheckPhrase} scholarship`;
        }
    }
}

console.log(student.describe());