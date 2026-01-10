'use strict';
//O valor "undefined" (indefinido)
    //Assim como o null, é um tipo por si só, contendo somente ele.
    //Undefined significa: valor não está atribuído. Se uma variável é declarada, mas não têm atribuição, ela está "undefined":
    let nome;
    console.log(nome); //Resulta undefined

    //Tecnicamente é possível atribuir "undefined" para uma variável, como abaixo:
    let idade = 100;
    idade = undefined;
    //Mas não é recomendado, já que o null faz um trabalho melhor para isso. Deixe undefined só para o padrão de valores não atribuídos