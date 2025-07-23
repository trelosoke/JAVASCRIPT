'use strict';
// Create an object 'circle' with property radius (number)
// Add a method 'calculateArea' that returns the area (πr²)
// Add a method 'calculateCircumference' that returns the circumference (2πr)

let circle = {
    radius: 16,
    pi: 3.14,

    calculateArea(){
        return (this.pi * this.radius ** 2).toFixed(2); 
    },

    calculateCircunference(){
        return (2 * this.pi * this.radius).toFixed(2);
    }
};

console.log(circle.calculateArea());
console.log(circle.calculateCircunference());
