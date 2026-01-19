'use strict';
let inicio, condição, passo;
//O loop 'for'
    //O loop 'for' é mais complexo, mas é também o loop mais comumente utilizado.
    //Parece-se com isto:
    for (inicio; condição; passo) {
        //corpo do loop
    }

    //Vamos aprender o significado dessas três partes por um exemplo. O loop abaixo executa 'console.log(i)' para 'i' de 0 até (mas não incluindo) 3:

    for (let i = 0; i < 3; i++){
        console.log(i);
    }

    //Analisemos a declaração 'for' parte a parte:
        // 1. inicio -- 'let i = 0' -- Executa uma vez ao entrar no loop
        // 2. condição -- i < 3 -- Verificado antes de cada iteração do loop. Caso falsim o loop para
        // 3. corpo -- console.log(i) -- Executa de novo, e de novo enquanto a condição é "truthy"
        // 4. passo -- i++ -- Executa depois do body a cada iteração

    //O algoritmo geral do loop funciona assim:
        // Executa 'inicio'
        // => Se condição (true) => executa 'body' e depois executa 'step' 
        // => Se condição (true) => executa 'body' e depois executa 'step' 
        // => Se condição (true) => executa 'body' e depois executa 'step' 
        // => ...

        //Ou seja, 'inicio' executa uma vez e então itera: após cada teste de 'condição', 'corpo' e 'passo' são executados.

    //Se és novo em loops, pode ajudar voltar ao exemplo anterior e reproduzir como executa passo a passo em uma folha de papel.

    //Isso é exatamente o que acontece em nosso caso:
    
    //for (let i = 0; i < 3; i++)

    //executa 'inicio'
    let i = 0; 

    // => Se condição (true) => executa 'body' e depois executa 'step' 
    if (i < 3) {
        console.log(i); 
        i++;
    }

    // => Se condição (true) => executa 'body' e depois executa 'step' 
    if(i < 3) {
        console.log(i);
        i++;
    }

    // => Se condição (true) => executa 'body' e depois executa 'step' 
    if(i < 3) {
        console.log(i);
        i++;
    }

    console.log(i);
    //Acaba, pois i == 3.

            //Variáveis 'in-line'
                //A variável de 'contagem' 'i' é declarada no loop. Isso se chama declaração de variável 'em linha'. Tais variáveis só são visíveis dentro do loop, ou seja, não podem ser utilizadas fora dele.
                for (let j = 0; i < 3; i++) {
                    console.log(j); //0, 1, 2
                }
                //console.log(j) -- Erro: não há essa variável

                //Ao invés de definir uma variável, podemos utilizar uma já existente:
                let j = 0;

                for (j = 0; j < 3; j++){
                    console.log(j) //0, 1, 2
                }
                console.log(j); //3, pois a variável foi definida fora de for e mutada por ele.