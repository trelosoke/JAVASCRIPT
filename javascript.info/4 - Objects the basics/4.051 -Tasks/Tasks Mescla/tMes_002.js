'use strict';
//Crie um objeto 'team' com métodos que usam 'this'. Em seguida, copie a referência para outra variável e teste se o método ainda funciona corretamente.

let team = {
    name: "Abutres",
    sayTeamMotto() {
        console.log("Olhos sempre abertos, " + this.name + "!");
    },
};

let team2 = team;
team.sayTeamMotto();
team2.sayTeamMotto();

console.log(team);
console.log(team2);

//Funciona normalmente!