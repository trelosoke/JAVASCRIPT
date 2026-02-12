'use strict';
//"return" para 'constructors'
    //Normalmente 'constructors' não têm uma declaração 'return'. A tarefa deles é escrever tudo necessário dentro de 'this' e ele automaticamente se torna o resultado.

    //Mas se houver a declaração 'return', a regra é simples:
    // - Se 'return' é chamado com um objeto, então o objeto é retornado ao invés de 'this'.
    // - Se 'return' é chamado com um primitivo, ele é ignorado.

    //Em outras palavras. 'return' com um objeto retorna aquele objeto, em todos os outros casos, 'this' é retornado. 
    //Por exemplo, aqui 'return' sobrescreve 'this' retornando um objeto:
    function BigUser() {
        this.name = "John";

        return {name: "Godzilla"} // <-- retorna esse objeto
    }

    console.log(new BigUser().name); //Godzilla

    //E aqui um exemplo com um 'return' vazio (ou poderíamos colocar um primitivo depois, não importa):
    function SmallUser() {
        this.name = "John";

        return; // <-- retorna 'this'
    }

    console.log(new SmallUser().name); //John
    

    //Normalmente construtores não têm uma declaração 'return'. Isso foi mencionado aqui apenas para fins de contemplar o que há na linguagem.

                //Omitindo parênteses
                    //A propósito, podemos omitir os parênteses após o 'new':
                    let user = new User; //sem parênteses
                    //o mesmo que
                    // let user = new User();
                    
                    //Omitir os parênteses aqui não é considerado um "bom estílo" na escrita, mas é permitido pela especificação.

    //Diferença entre primitivos e objetos.