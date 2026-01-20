'use strict';
//Funções == Comentários
    //Funções devem ser pequenas e fazer exatamente uma coisa. Se for grande, talvez valha a pena dividir a função em outras pequenas funções. Algumas vezes seguir essa regra não é tão fácil, mas definitivamente é uma coisa boa.

    //Uma função separada não é apenas fácil de testar e depurar, sua própria existência é um ótimo comentário!
    //Por exemplo, compare as duas funções 'mostrarPrimos(n)' abaixo. Cada uma exibe numeros primos até 'n'.
    
    //A primeira variante usa uma label (rótulo):
    function mostrarPrimos(n) {
        proxPrimo: for (let i = 2; i <= n; i++){
            for (let j = 2; j < i; j++){
                if(i % j === 0) continue proxPrimo;
            }

            console.log(n); //um primo
        }
    }

    //A segunda variante usa uma função adiciona 'ehPrimo(n)' para testar a primalidade:
    function mostrarPrimos2(n) {
        for (let i = 2; i <= n; i++){
            if (!ehPrimo(i)) continue;
            console.log(i);
        }
    }

    function ehPrimo(n) {
        for (let i = 2; i < n; i++){
            if (n % i === 0) return false;
        }
        return true;
    }

    mostrarPrimos2(20);

    //A segunda variante é mais fácil de entender, não é? Ao invés do pedaço de código, vemos o nome de uma ação 'ehPrimo'. Algumas vezes pessoas referem-se a tal código como 'autodescritivo'.
    //Então, funções podem ser criadas mesmo se não tivermos a intenção de as reutilizar. Elas estruturam o código e o fazem mais legível e semântico.