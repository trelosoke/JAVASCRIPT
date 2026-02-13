'use strict';
// Create an object 'rectangle' with properties width and height (both numbers)
// Add a method 'calculateArea' that returns width * height
// Add a method 'isSquare' that returns true if width equals height

let rectangle = {
    width: 600,
    height: 600,

    calculateArea(){
        return this.width * this.height;
    },

    isSquare(){
        if(this.width === this.height) return true;
        return false; 
    }
};

console.log(rectangle.calculateArea());
console.log(rectangle.isSquare());