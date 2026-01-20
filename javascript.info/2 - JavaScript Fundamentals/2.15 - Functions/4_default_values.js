'use strict';
//Valores padrão
    //Se uma função é chamada, mas um argumento não é provido, então o valor correspondente se torna 'undefined'.
    //Por exemplo, a função mencionada anteriormente 'mostrarMensagem(de, texto)' pode ser chamada com um único argumento:
    function mostrarMensagem(de, texto) {
        de = '*' + de + '*';
        
        console.log(de + ': ' + texto);
    }
    mostrarMensagem('Anna');

    //Isso não é um erro. Tal chamada mostra "*Anna*: undefined". Como o valor de 'texto' não foi passado, se torna 'undefined'.
    //Podemos especificar o chamado valor 'default (padrão)' (usado se o argumento foi omitido) para um parâmetro em uma 'declaration' de função, usando =:

    function mostrarMensg(de, texto = 'texto não fornecido') {
        console.log(de + ": " + texto);
    }

    mostrarMensg('Anna'); //Anna: texto não fornecido

    //Agora caso o parâmetro de 'texto' não for passado, irá obter o valor "texto não fornecido".
    //O valor padrão também entra se o parâmetro existe, mas ESTRITAMENTE igual a 'undefined':
    mostrarMensg('Anna', undefined);
    
    //Nesses exemplos, 'texto não fornecido' é dado como uma string, mas pode ser uma expressão mais complexa, a qual apenas é avaliada e atribuída caso o parâmetro estiver faltando. Então, isso também é possível:
    function mostrarMensagem2(de, texto = outraFunction()) {
        //outraFunction() apenas é executada se 'texto' não teve valor atribuído.
        //o resultado dela se torna o valor de 'texto'. 
    }

            //Avaliação de parâmetros padrão (default)
                //No JavaScript, um parâmetro padrão é avaliado toda vez que a função é chamada sem determinado parâmetro.
                //No exemplo acima, 'outraFunction()' não é chamada se o parâmetro 'texto' for fornecido.
                //Por outro lado, é independentemente chamado toda vez que 'texto' está faltando.

            //Parâmetros padrão no código JavaScript antigo
                //Muitos anos atrás, o JavaScript não suportava a sintaxe para parâmetos padrão. Então as pessoas utilizaram outras maneiras de especificá-los.
                //Atualmente, podemos passar por elas em scripts antigos.
                //Por exemplo, uma verificação explícita para 'undefined':
                function mostrarMensagem3 (de, texto) {
                    if (texto === undefined) {
                        texto = 'texto não fornecido';
                    }

                    console.log(de + ': ' + texto);
                }

                //Ou usando o operador OR (||):
                function mostrarMensagem4 (de, texto) {
                    texto = texto || 'texto não fornecido';
                    console.log(de + ': ' + texto);
                }
    
//Valores padrão alternativos.
    //Algumas vezes faz sentido atribuir valores padrão para parâmetros em um estágio mais tardio depois da 'declaration' de função.
    //Podemos checar se o parâmetro é passado durante a execução da função comparando-a com 'undefined', exatamente do jeito dos exemplos acima de códigos antigos. Ou usando o operador OR (||), da mesma maneira dos exemplos acima.

    //Engines (motores) do JavaScript moderno suportam o operador de coalescência nula (nullish coalescing operator) '??', que seve ser utilizado somente quando se quer considerar valores falsy, tal como o 0, normais:
    function mostrarContagem(contagem) {
        //Se 'contagem' é 'undefined' ou 'null', mostra 'desconhecido'
        console.log(contagem ?? 'desconhecido');
    } 

    mostrarContagem(0); //0
    mostrarContagem(null); //desconhecido (null)
    mostrarContagem(); //desconhecido (undefined)