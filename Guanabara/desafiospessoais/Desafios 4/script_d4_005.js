/*
let i = 0;
while (i++ < 5) {
    console.log( i );
}
*/

//Aqui a condição é separada da incrementação. Logo, ++i ou i++ não tem diferença no resultado
for (let i = 0; i < 5; i++) {
    if(!i) continue
    console.log( i );
}