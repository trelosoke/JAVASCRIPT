'use strict';
//Expressões de função (Function Expression)

    //No JavaScript, uma função não é apenas uma "estrutura de linguagem mágica". Algumas linguagens lançadas mais antigamente não permitem atribuir funções à variáveis, chamar uma função dentro de outra ou manipular funções (só com mecanismos extras). Ou seja, a função só é declarada e chamada.
    //No JS, não. A função é um tipo especial de valor.

    //A sintaxe que usamos anteriormente é chamada de 'declaration' de função (ou identificação de função, mas para vias mais práticas, pode ser declaração de função):
    function digaOla() {
        console.log('Olá');
    }

    //Há uma outra sintaxe para criação de função chamada 'expressão de função'.
    //Nos permite criar uma nova função no meio de QUALQUER expressão:
    let digaOla = function() {
        console.log('Olá');
    }
    //Aqui podemos ver a variável 'digaOla' obtendo um valor, a nova função, criado como "function() { console.log('Olá'); }"
    //Como a criação da função acontece no contexto da atribuição (lado direito de '='), isso é uma expressão de função

    //Por favor note, não há nome depois da palavra-chave 'function'. Omitir o nome é permitido em expressões de função.

    //Nesse caso, a atribuímos imediatamente à variável, então o significado dessas amostras de código é o mesmo que: "crie uma função e e coloque-a dentro da variável 'digaOla'".

    //Em situações mais avançadas, que iremos adentrar depois, uma função pode ser criada e chamada imediatamente ou agendada para execução posterior, não armazenando em nenhum lugar, permanecendo assim anônima.