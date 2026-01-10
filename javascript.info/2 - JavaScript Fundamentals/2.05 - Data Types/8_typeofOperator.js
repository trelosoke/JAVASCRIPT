'use strict';
//Operador "typeof"
    //Retorna o tipo do operando. Útil ao processar dados de diferentes tipos de formas diferentes ou para fazer uma checagem rápida.
    //Uma chamada de "typeof (operador)" retorna uma string com o nome do tipo:
    typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"  (1)

    typeof null // "object"  (2)

    typeof alert // "function"  (3)

    //Sobre os últimos 3:
        // 1. Math é um "build-in" object que provê operações matemáticas. Aqui foi usada apenas como exemplo. Será mais explorada depois.
        // 2. O resultado de "typeof null" ser "object" está errado. É um erro oficialmente reconhecido e vindo de tempos antigos do JS, permanecendo por questões de compatibilidade. Null não é objeto.
        // 3. O resultado de "typeof alert" ser "function" vêm por "alert" ser uma. Mas perceba que uma função não é um tipo de dado. Função é um objeto. Isso também vem de tempos antigos do JS. Por mais disso estar errado, pode ser bem útil em algumas ocasiões.
        
        //comentário
          //A sintáxe "typeof(x)"
            //É o mesmo que o sem o parênteses "typeof x". É permitido a forma com parênteses pois ela deixa um espaço entre o operador (typeof) e o operando (x), mas não é necessário. Normalmente, é mais usado quando há expressões:
            typeof(3 + 2);
            typeof(20 / 2);
            //Aliás, "typeof x" é muito mais comum.