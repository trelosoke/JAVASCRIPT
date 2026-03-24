'use strict';
//Mais maneiras de escrever um número
    //Imagine que precisamos escrever 1 bilhão. A maneira óbvia é:
        let billion = 1000000000;

    //Também podemos usar o underline ('_', também chamado de "underscore" no inglês) como um separador:
        billion = 1_000_000_000;

    //Aqui a underline faz o papel de um "syntatic sugar", que é uma forma de sintaxe que facilita a compreensão, fazendo o número mais legível. O motor (engine) do JavaScript simplesmente ignora '_' entre dois dígitos, então é exatamente o mesmo que o 1 bilhão anterior.
    
    //Na vida real, entretanto, tentamos evitar escrever longas sequências de zeros. Somos preguiçosos demais para isso. Vamos tentar escrever algo como "1bi" para um bilhão ou "7,3bi" para 7 bilhões e 300 milhões. O mesmo se concretiza para a maioria dos números grandes.

    //No JS, podemos encurtar um número adicionando a letra "e" nele e especificando a contagem de zeros:

        let bilhao = 1e9; //1 bilhão, literalmente 1 e 9 zeros

        console.log(7.3e9); //7,3 bilhões (o mesmo que 7300000000 ou 7_300_000_000)

    //Em outras palavras, 'e' multiplica o número por 1 com a contagem de zeros fornecida

        console.log(1e3 === 1 * 1000); //e3 é * 1000
        console.log(1.23e6 === 1.23 * 1000000); //e6 é * 1000000

    
    //Agora vamos escrever algo muito pequeno. Vamos dizer, um microsegundo (um milionésemo de segundo):
        let mcs = 0.000001;

    //Assim como antes, usar o 'e' pode ajudar. Se gostaríamos de evitar escrever os zeros explicitamente, poderiamos escrever o mesmo que:
        mcs = 1e-6;

    //Considere que o 'e' é uma potência de 10. No caso acima, seria uma notação '1x10^-6', sendo o mesmo que trazer a vírgula para a esquerda de 1 seis vezes. 

    //Também, se contarmos os zeros em '0.000001', há 6 deles. Então naturalmente é 1e-6.

    //Em outras palavras, um número negativo após 'e' siginifica uman divisão por 1 seguido dos zeros fornecidos, ou simplesmente uma divisão de 10 elevado ao número após o 'e'.
        //-3 divide por 1 com 3 zeros
        console.log(1e-3 === 1/1000);
        
        //-6 divide por 1 com 6 zeros
        console.log(1.23e-6 === 1.23 / 1000000);

        //um exemplo com um número maior e potência de 10
        console.log(1234e-1 === 1234 * 10**-1); //É como se o é fosse simplesmente '10'