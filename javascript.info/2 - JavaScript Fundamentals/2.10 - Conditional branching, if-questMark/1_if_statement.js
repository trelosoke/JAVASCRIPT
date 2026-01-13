'use strict';
//If
    //A declaração "if" avalia a condição dentro dos parênteses e, se ela mostrar-se verdadeira, o bloco de código é executado:
    let year = 2026;

    if (year == 2026) console.log('Acertou!');
    
    //No caso, o exemplo acima analisou apenas uma condição: variável "year" tem o mesmo valor de "2026"? Se sim, "console.log('Acertou!');" é rodado.
    //Para mais açoes dentro da condição, o melhor é separar por linhas dentro de um bloco de código (entre chaves), exatamente na formatação abaixo:
    if(year != 2026){
        console.log('Errou!');
        console.log('Estude mais!');
    } //Nesse caso, blocos não necessitam de ponto e vírgula (semicolon) no final.

    //Isso melhora alegibilidade