'use strict';
//Cálculos imprecisos
    //Internamente, um número é representado no formato IEEE-754 64-bit, então há exatamente 64 bits para armazenar um número: 52 deles são usados para armazenar os dígitos, 11 deles armazenam a posição do "ponto" decimal e um bit é para o sinal (+ ou -).

    //Se um número é muito grande, ele pode ultrapassar do armazenamento 64-bit e se tornar um valor numérico especial 'Infinity':
        console.log(1e500); //Infinity

    //O que pode ser menos óbvio, mas acontece com certa constância, é a perda de precisão.

    //Considere esse teste de igualdade (falsy!):
        console.log(0.1 + 0.2 == 0.3); //false

    //É isso mesmo, caso verificarmos se a soma de 0.1 + 0.2 é igual a 0.3, obtermos 'false'.

    //Estranho! O que é então, se não é 0.3?
        console.log(0.1 + 0.2); //0.30000000000000004

    //Ai! Imagine que você está fazendo um site de e-shop e o visitante coloca mercadorias de $0.10 e $0.20 no carrinho. O total do pedido será $0.30000000000000004. Isso surpreenderia qualquer um.


    //Mas por que isso acontece?
        //Um número é guardado na memória em sua forma binária, uma sequência de bits (uns e zeros). Mas frações como 0.1, 0.2 que parecem simples no sistema numérico decimal são na verdade frações infinitas em suas formas binárias.

        console.log(0.1.toString(2)); //0.00011001100110011001100110011001100110011001100110011010
        console.log(0.2.toString(2)); //0.001100110011001100110011001100110011001100110011001101
        console.log((0.1+0.2).toString(2)); //0.0100110011001100110011001100110011001100110011001101


        //O que é 0.1? É 1 dividido por 10 (1/10), um décimo, no sistema numérico decimal tais números são facilmente representáveis. Compare isso com um terço: 1/3. Se torna uma fração infinita 0.333333... x 3);

        //Então, uma divisão por potência de 10 funcionará bem em um sistema decimal, garantidamente. Mas uma divisão por 3 não. Pela mesma razão, no sistema numérico binário, a divisão por potência de 2 funcionará sem dúvida, mas 1/10 se torna uma fração binária infinita.

            //No binário, nós multiplicamos o número por dois até resultar exatamente 1:
            /* Descobrindo 0.1 binário
             *
             * 0.1 x 2 = 0.2  (0 bit)
             * 0.2 x 2 = 0.4  (0 bit)
             * 0.4 x 2 = 0.8  (0 bit)
             * 0.8 x 2 = 1.6  (1 bit, sobra 0.6)
             * 0.6 x 2 = 1.2  (1 bit, sobra 0.2) !! OPA, voltamos ao 0.2 novamente
             * 
             * repetição
             * 0.2 x 2 = 0.4  (0 bit)
             * 0.4 x 2 = 0.8  (0 bit)
             * 0.8 x 2 = 1.6  (1 bit, sobra 0.6)
             * 0.6 x 2 = 1.2  (1 bit. sobra 0.2)
             */

            //Logo, o número entra em um loop, uma dízima periódica que sempre vai repetindo os números na sequência '0011'. Mas como o limite dos bits é de 52 bits, essa sequência "infinita" vai somente até esse limite.

        //Simplesmente não há modo de armazenar exatamente 0.1 ou 0.2 usando o sistema binário, assim como não há como guardar um terço em uma fração decimal.

        //O formato numérico IEEE-754 resolve isso arredondando para o número mais próximo possível. Essas regras de arredondamento normalmente não nos permitem ver essa "pequena perda de precisão", mas ela existe.

        //Podemos ver isso em ação:
            console.log(0.1.toFixed(20)); //555 no final, onde o número perdeu precisão

        //E quando somamos dois números, suas "perdas de precisão" são adicionadas.

        //Por isso 0.1 + 0.2 não é exatamente 0.3.

                //Não apenas no JavaScript
                    //O mesmo problema existe em muitas outras linguagens.

                    //PHP, Java, C, Perl e Ruby dão exatamente o mesmo resultado, pois eles são baseados no mesmo formato numérico.


        //Podemos trabalhar ao redor desse problema? Claro, o método mais confiável é arredondar o resultado com a ajuda de um método 'toFixed(n)':

            let soma = 0.1 + 0.2;
            console.log(soma.toFixed(2)); //0.30

        //Por favor note que o 'toFixed' sempre retorna uma string. Isso garante que tenha 2 dígitos após o "ponto" decimal. Isso é, na verdade, conveniente se temos um e-shop e precisamos mostrar $0.30. Para outros casos, podemos usar o '+' unário para convertê-lo em número.

            soma = 0.1 + 0.2;
            console.log(+soma.toFixed(2)); //0.3

        //Também podemos temporariamente multiplicar os números por 100 (ou um número maior) para torná-los em inteiros, fazer os cálculos, e então dividí-los de volta pelo mesmo número. Então, como estamos fazendo os cálculos com inteiros, o erro diminui um pouco, mas ainda o obtemos na divisão:

            console.log((0.1 * 10 + 0.2 * 10) / 10); //0.3
            console.log((0.28 * 100 + 0.14 * 100) / 100); //0.4200000000000001

        //Então a abordagem de multiplicar/dividir reduz o erro, mas não o remove totalmente.

        //Algumas vezes poderiamos evitar frações por completo. Como se estivermos lidando com uma loja, então podemos guardar preços em cents ou centavos ao invés de dólares ou reais. Mas e se aplicarmos um desconto de 30%? Na prática, isso é raramente possível. Só arredonde eles para cortar as "pontas" quando precisar.

                //O engraçado
                    //Tente rodar isso:
                        console.log(9999999999999999); //mostra 10000000000000000

                    //Isso sofre do mesmo problema: falta de precisão. Há 64 bits para o número, 52 deles podem armazenar os dígitos, mas não é o suficiente. Então os dígitos menos significantes desaparecem.

                    //O JS não aciona um erro em tais eventos. Ele faz o seu melhor para encaixar o número no formato desejado, mas infelizmente, esse formato não é grande o suficiente.


                //Dois zeros
                    //Outra consequência engraçada da representação interna de números é a existência de dois zeros: 0 e -0.

                    //Isso porque um sinal é representado por um único bit, então ele pode ser definido ou não para qualquer número, incluindo um zero.

                    //Na maioria dos casos, a distinção é imperceptível, pois operadores são projetados para tratá-los igualmente.