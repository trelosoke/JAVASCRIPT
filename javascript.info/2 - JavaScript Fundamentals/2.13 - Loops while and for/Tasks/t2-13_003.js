'use strict';
//For each loop write down which values it is going to show. Then compare with 
// the answer. Both loops alert same values or not?
for (let i = 0; i < 5; i++) alert( i ); //0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); //0, 1, 2, 3, 4

//Em ambos os casos, a incrementação prefixa e sufixa dão o mesmo resultado, 
// pois a incrementação é sempre feita após rodar o código, e não logo após a 
// condição.