'use strict';
function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;

    return {
        father: man,
        mother: woman,
    }
}

let casei = marry({name: 'John Server'}, {name: 'Jane Server'});

console.log(casei);

delete casei.father;

console.log(casei);

delete casei.mother.husband;

console.log(casei);
