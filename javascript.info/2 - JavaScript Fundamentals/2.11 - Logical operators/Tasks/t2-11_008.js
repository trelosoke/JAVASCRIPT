'use strict';
/*
Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?
*/
if (-1 || 0) console.log( 'first' ); //-1    ---1---
if (-1 && 0) console.log( 'second' ); //0   ---2---
if (null || -1 && 1) console.log( 'third' ); //1   ---3---

//if 1 irá ser executado, pois -1 é true e OR (||) dá toda a declaração como true quando há ao menos um valor true.
//if 2 não irá ser executado, pois 0 é false e AND (&&) só executa a declaração se ambos os operandos forem true.
//if 3 irá ser executado, pois: 1. null é falsy, mas -1 é truthy. Logo, como está em OR (||), o truthy (-1) será considerado. Já no AND (&&), -1 e 1 são ambos truthy. Logo, a declaração será executada.