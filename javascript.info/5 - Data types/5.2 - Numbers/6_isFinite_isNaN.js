'use strict';
//Testes: 'isFinite' e 'isNaN'
    //Lembra desses dois valores numéricos especiais?
        //Infinity (e -Infinity) é um valor numérico especial que é maior ou menor que qualquer coisa.
        //NaN representa um erro.

    //Eles pertencem ao tipo "number", mas não são números "normais", então há funções especiais para verificar por eles:
        
        //'isNaN(valor)' converte seu argumento para um número e então o testa para ver se é NaN (Not a Number):
            console.log(isNaN(NaN)); //true, "não é um número" não é um número.
            console.log(isNaN("str")); //true

            //Mas nós precisamos dessa função? Não podemos apenas fazer a comparação ...=== NaN? Infelizmente não. O valor NaN é único, pois não é igual a nada, incluindo ele mesmo:

                console.log(NaN === NaN); //false

        //'isFinite(valor)' converte seu argumento para um número e retorna true se é um número regular, que não seja: NaN, Infinity, -Infinity:

            console.log(isFinite("15")); //true
            console.log(isFinite("str")); //false, NaN
            console.log(isFinite(Infinity)); //false, Infinity

            //Algumas vezes, 'isFinite' é usado para validar se o valor de uma string é um número regular:

                // * let num = +prompt("Digite um número", '');

                //será true a não ser que você digite Infinity, -Infinity ou um NaN
                // * alert(isFinite(num));
                
            //Por favor note que uma string vazia ou somente com espaços é tratada como 0 em todas as funções numéricas incluindo 'isFinite'.


                //'Number.isNaN' e 'Number.isFinite'
                    //Os métodos 'Number.isNaN' e 'Number.isFinite' são versões mais "estritas" das funções 'isNaN' e 'isFinite'. Eles não convertem para número em seus argumentos, mas verifica se pertence ao tipo "number" ao invés disso.

                        // - 'Number.isNaN(valor)' retorna true se o argumento pertence ao tipo "number" e é NaN. Em qualquer outro caso, retorna false:
                            console.log(Number.isNaN(NaN)); //true
                            console.log(Number.isNaN("str" / 2)); //true, foi convertido com a divisão por 2

                            //Note a diferença
                            console.log(Number.isNaN("str")); //false, pois "str" é uma string
                            console.log(isNaN("str")); //true, pois 'isNaN' converte "str" para número e obtém NaN como resultado dessa conversão.

                        // - 'Number.isFinite(valor)' retorna true se o argumento pertencer ao tipo "number" e não é: NaN/Infinity/-Infinity. Em qualquer outro caso, retorna false:
                            console.log(Number.isFinite(123)); //true
                            console.log(Number.isFinite(Infinity)); //false
                            console.log(Number.isFinite(1 / 0)); //false

                            //Note a diferença:
                            console.log(Number.isFinite("123")); //false, pois "123" é uma string
                            console.log(isFinite("123")); //true, "123" é convertido para número e retorna 123


                    //De certa forma, 'Number.isNaN' e 'Number.isFinite' são mais simples e diretos do que as funções 'isNaN' e 'isFinite'. Na prática, entretanto, 'isNaN' e 'isFinite' são mais utilizados, como são menores de escrever.

                
                //Comparação com 'Object.is'
                    //Há um método nativo (build-in) especial 'Object.is' que compara valores assim como '===', mas é mais confiável para dois casos extremos:
                        // 1. Funciona com NaN: 'Object.is(NaN, NaN) === true', isso é algo bom.
                            console.log(Object.is(NaN, NaN));
                        // 2. Valores 0 e -0 são diferentes: 'Object.is(0, -0) === false', tecnicamente isso está correto, pois internamente o número tem um único bit que deve ser diferente mesmo se todos os bit são zeros.
                            console.log(Object.is(0, -0));

                    //Em todos os outros casos, 'Object.is(a, b)' é o mesmo que 'a === b'. 

                    //Mencionamos 'Object.is' aqui, pois é frequentemente usado na especificação do JavaScript. Quando um algoritmo interno precisa comparar dois valores por serem exatamente o mesmo, ele usa 'Object.is' (internamente chamado de 'SameValue').