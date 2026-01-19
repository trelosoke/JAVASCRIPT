'use script';
//Pulando partes
    //Qualquer parte de 'for' pode ser pulada.
    //Por exemplo, podemos omitir 'inicio' se não precisarmos fazer nada ao início do loop:
    let i = 0; //temos 'i' já declarado e atribuído
    for (; i < 3; i++) { //sem necessidade de 'inicio'
        console.log(i); //0, 1, 2
    }

    //Podemos também remover a parte 'passo':
    let j = 0;
    for (; j < 3;) {
        console.log(j++);
    }
    //Isso o faz ficar idêntico ao loop 'while'
    //Na verdade, podemos remover tudo, criando um loop infinito:
    for (;;) {
        //repete sem limitação
    }
    //Os dois pontos  e vírgulas (semicolons) devem estar presentes. Senão, ocorrerá erro de sintaxe.