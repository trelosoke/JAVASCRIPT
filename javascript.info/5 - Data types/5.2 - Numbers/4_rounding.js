'use strict';
//Arredondando
    //Uma das operações mais utilizadas quando trabalhando com números é arredondamento.
    //Há muitas funções nativas (build-in) para arrendodamento:
        //Math.floor
            //Arredonda para baixo
            console.log(Math.floor(3.1)); //Se torna 3
            console.log(Math.floor(-1.1)); //Se torna -2

        //Math.ceil
            //Arredonda para cima
            console.log(Math.ceil(3.1)); //Se torna 4
            console.log(Math.ceil(-1.1)) //Se torna -1

        //Math.round
            //Arredonda para o inteiro mais próximo
            console.log(Math.round(3.1)); //Se torna 3
            console.log(Math.round(3.6)); //Se torna 4
            
            //Quando se encontra na metade, 3.5 arredonda para 4 e -3.5 arredonda para -3. Ou seja, números positivos que são a exata metade de um inteiro arredonda para cima, os negativos também.
            
            console.log(Math.round(3.5)); //4
            console.log(Math.round(-3.5)); //-3

        //Math.trunc (não suportado pelo Internet Explorer)
            //Remove qualquer número após o "ponto" de decimal sem arredondar
            console.log(Math.trunc(3.1)); //Se torna 3
            console.log(Math.trunc(-1.6)); //Se torna -1


    //Essas funções abordam todas as formas possíveis de lidar com a parte decimal de um número. Mas e se quisermos arredondar o número para o n-ésimo dígito depois do decimal?

    //Por exemplo, temos 1.2345 e queremos arredondar para 2 dígitos, obtendo apenas 1.23.

    //Há dois modos de fazer isso:
        // 1. Multiplicar-e-dividir.
            //Por exemplo, para arredondar o número para o segundo dígito após o decimal podemos multiplicar o número por 100, chamar a função de arrendondamento e então dividir de volta:
            let num = 1.23456;

            console.log(Math.round(num * 100) / 100); //1.23456 -> 123.456 -> 123 -> 1.23

        // 2. O método 'toFixed(n)' arredonda o número para n dígitos depois do "ponto" e retorna uma representação em string do resultado.
                num = 12.34;
                console.log(num.toFixed(1)); //"12.3"

            //Isso arredonda para cima ou para baixo do valor mais próximo, similar ao 'Math.round':
                num = 12.36;
                console.log(num.toFixed(1)); //"12.4" 

            //Por favor note que o resultado de 'toFixed' é uma string. Se a parte decimal é menor do que o necessário, os zeros são adicionados no final:
                num = 12.34;
                console.log(num.toFixed(3)); //Adiciona '0' até chegar no exato dígito: 5.

            //Podemos convertê-lo para número usando o '+' unário ou uma chamada 'Number()', por exemplo, escrever '+num.toFixed(5)'.