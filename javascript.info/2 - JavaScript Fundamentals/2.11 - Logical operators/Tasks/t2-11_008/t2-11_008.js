'use strict';
//Which of these console.log are going to execute?

//What will the results of the expressions be inside if(...)?

if (-1 || 0) console.log( 'first' ); //Executa - a condição retorna -1
if (-1 && 0) console.log( 'second' ); //Não executa - a condição retorna 0
if (null || -1 && 1) console.log( 'third' ); //Executa - a condição retorna 1