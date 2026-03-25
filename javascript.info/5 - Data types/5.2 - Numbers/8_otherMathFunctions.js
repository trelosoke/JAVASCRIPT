'use strict';
//Outras funções matemáticas
    //O JavaScript tem um objeto nativo (build-in) 'Math' que contém uma pequena biblioteca de funções matemáticas e constantes.

    //Alguns exemplos;
        //Math.random()
            //Retorna um número aleatório de 0 a 1 (sem incluir 1) a cada execução
                console.log(Math.random()); 
                console.log(Math.random());

        //Math.max(a, b, c...) e Math.min(a, b, c...)
            //Retorna o maior e o menor para qualquer número de argumentos:
                console.log(Math.max(2, 3, 1.4, 1.2, 34));
                console.log(Math.min(13, 16, 6.4, 5.2, 5.1, 2));

        //Math.pow(n, expoente)
            //Retorna 'n' elevado ao expoente fornecido:
                console.log(Math.pow(2, 6)); //2 elevado a 6 = 64

    
    //Há mais funções e constantes no objeto 'Math', incluindo trigonometria, as quais você pode nos documentos para o objeto 'Math': https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
