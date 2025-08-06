'use strict';
//Acessibilidade (Referenciabilidade, Reachability)
    //Conceito principal de gerenciamento de memória no JS
    //  Valores "Acessíveis (Referenciável, Reachable)" são aqueles que podem ser acessados/usados
    //Esses sempre estarão armazenados na memória

//1. Conjunto de de valores que são inerentemente acessíveis, sem possibilidade de exclusão, são chamados de ROOTS.
    //Funções em execução, seus parâmetros e variáveis locais
    //Outras funções na cadeia atual de chamadas aninhadas, seus parâmetros e variáveis locais
    //Variáveis globais

//2. Qualquer outro valor é considerado "acessível" quando acessível de um ROOT por uma referência ou cadeia de referências.
    //Objetos dentro de objetos e suas cadeias aninhadas são considerados acessíveis, pois estão dentro do root(raiz), que é o objeto numa variável global.
    //O processo chamado "garbage collector" no JavaScript monitora todos os objetos e remove aqueles cujos se tornaram inalcançáveis.

//Exemplo simples
let user = {      //user é uma variável local que usa o objeto { name: 'John' } como referência.
    name: 'John'
};

user = null; //Caso sobrescrevermos user, o objeto se torna inacessível. Garbage collector vai deletar da memória e liberar a memória.

//Exemplo aninhado
let user2 = {
    name: 'Douglas',
    age: 16,
    address: {
        city: 'São Paulo', //Objeto também acessível pela memória
        country: 'Brazil' 
    }
};

user2 = null; //Agora excluído pela memória, não é mais acessível.