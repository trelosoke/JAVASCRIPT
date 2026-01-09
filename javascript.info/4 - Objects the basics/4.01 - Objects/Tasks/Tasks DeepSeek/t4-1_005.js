'use strict';
// Create an object 'car' with properties: brand (string), model (string), and year (number)
// Add a method 'startEngine' that returns "Vroom! The [brand] [model] is starting!"
// Call the method and store the result in a variable 'engineSound'

let car = {
    brand:'Nissan',
    model: 'Nivus',
    year: 2024,

    startEngine(){
        return `Vroom! The ${this.brand} ${this.model} is starting!`
    }
}

car.startEngine();
let engineSound = car.startEngine();

console.log(engineSound);