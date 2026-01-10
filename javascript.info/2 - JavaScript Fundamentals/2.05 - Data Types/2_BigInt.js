'use strict';
//BigInt
  //Para entendimento melhor desse assunto, procure conteúdo sobre "padrão IEEE 754".
    //Em resumo, o JavaScript usa um padrão para escrita de números em binário chamado IEEE 754. Ele, no intanto, só consegue representar números até 2**53 - 1 devido ao espaço da memória ser de 64 bits, sendo reservados 53 deles para mantissa (parte que armazenas os dígitos que compõem o número). Isso também serve para os números negativos.
    //Ao passar desse número, não há precisão em cálculos e em nada. Então, o que o JS faz é aproximar o número.
    console.log(9007199254740991 + 1); //9007199254740992
    console.log(9007199254740991 + 2); //9007199254740992
    
    //O limite de 2**53 - 1 é bem grande e suficiente para a maioria dos casos. Mas alguns casos podem envolver bastante precisão, como em contadores de microsegundo e criptografia.
    //Para resolver isso, o tipo BigInt foi adicionado para inteiros acima desse limite.

    //Um valor BigInt pode ser criado anexando "n" ao final de um número inteiro:
    const bigInt = 120934921023424363583982436534563453254n;
    console.log(9007199254740991n + 1n);
    console.log(9007199254740991n + 2n);

    //Números assim são bem pouco utilizados, mas haverá capítulos posteriores para cobrir isso.