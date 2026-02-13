'use strict';
//Faça um clone superficial de um objeto 'settings' usando Object.assign. Depois, modifique uma propriedade aninhada e observe o efeito.

let settings = {
    graphicsPreset: 'low',
    resolution: {
        width: 1280,
        height: 720,
    }
};

let clone = Object.assign({}, settings);
console.log(clone);

settings.resolution.width = 200;
console.log(clone);