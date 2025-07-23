'use strict';
// Create an object 'lightSwitch' with property isOn (boolean)
// Add methods: 'toggle' (switches isOn), 'turnOn', and 'turnOff'
// Each method should return the new state (e.g., "Light is now ON")

let lightSwitch = {
    isOn: false,

    toggle(){
        this.isOn = !this.isOn;
        return `Light is now ${this.isOn ? 'ON' : 'OFF'}!`;
    },

    turnOn(){
        this.isOn = true;
        return `Light is now ON!`;
    },

    turnOff(){
        this.isOn = false;
        return `Light is now OFF!`;
    }
}

console.log(lightSwitch.toggle());
console.log(lightSwitch.turnOff());
console.log(lightSwitch.turnOn());
console.log(lightSwitch.toggle());