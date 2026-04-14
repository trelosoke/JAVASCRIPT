'use strict';
//Obtenha os últimos elementos com "at"
                // !-- Adição recente
                    //Embora seja uma adição recente, a maioria dos navegadores já aceita hoje em dia. Porém, em casos muitos específicos, pode precisar se polyfills.
    
    //Vamos dizer que queremos o último elemento do array.

    //Algumas linguagens de programação permitem o uso de índices negativos para o mesmo propósito, como 'frutas[-1]'.

    //Entretanto, no JavaScript isso não funciona. O resultado será 'undefined', pois o índice nos colchetes é tratado literalmente, ou seja, busca literalmente se tal chave chamada "-1" existe, que não é o caso.

    //Podemos explicitamente calcular o índice do último elemento e então acessá-lo:
        let frutas = ["Maçã", "Laranja", "Ameixa"];
        console.log(frutas[frutas.length - 1]); //Ameixa
            // 1. 'frutas[2]' busca o elemento no índice 0 (começa de 0, 1, 2 (três elementos))
            // 2. 'frutas.length' = comprimento / quantos elementos tem o array (começa de 1, 2, 3 (três elementos))
            // 3. 'frutas.length' - 1 representa a última posição de um array em um índice (1, 2 (índice frutas[2] é o último elemento))

    //Um pouco trabalhoso, já que precisamos escrever o nome da variável duas vezes.

    //Felizmente, há uma sintaxe menor:
        frutas = ["Maçã", "Laranja", "Ameixa"];

        //o mesmo que 'frutas[frutas.length - 1]'
        console.log(frutas.at(-1)); //Ameixa

    //Em outras palavras, 'array.at(indice)':
        // - é exatamente o mesmo que 'array[indice]', se 'indice >= 0';
        // - para valores negativos de 'indice', ele começa do final do array.