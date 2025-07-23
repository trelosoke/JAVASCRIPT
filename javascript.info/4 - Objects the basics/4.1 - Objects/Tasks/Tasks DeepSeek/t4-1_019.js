'use strict';
// Create an object 'thermostat' with property currentTemp (number)
// Add methods: 'increaseTemp(amount)', 'decreaseTemp(amount)'
// Add a method 'displayTemp' that returns "Current temperature: [X]°C"

let thermostat = {
    currentTemp: 19,

    increaseTemp(amount){
        this.currentTemp += amount;
        return this.currentTemp;
    },

    decreaseTemp(amount){
        this.currentTemp -= amount;
        return this.currentTemp;
    },

    displayTemp(){
        return console.log(`Current temperature: ${this.currentTemp}°C`);
    }
};

thermostat.increaseTemp(5);
thermostat.decreaseTemp(2);
thermostat.displayTemp();