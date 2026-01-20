'use strict';
//"Declaration" de função
            //Termo "declaration"
                //No português, pode-se perder o significado de algumas palavras parecidas. Statements, como já vimos, são declarações no código. Ou seja, qualquer comando que o JavaScript executa. Porém, "declaration" não significa também "declaração", mas sim um tipo dela.
                //Declaration é um statement (declaração) que especificamente introduz um identificador. Variáveis, por exemplos, são nomeadas. E, no nosso caso, funções também.
                //Para meios simplesmente didáticos, irei utilizar a palavra "identificação", mas lembre-se que são "declarations".

    //Para criarmos uma função podemos usar a "declaration" de função:
    function mostrarMensg() {
        console.log('Olá à todos!');
    }
    //A palavra-chave "function" é escrita primeiro, e então o nome da função (seu identificador), e então uma lista de parâmetros enre parênteses (separados por vírgula (comma), vazios no exemplo acima (explicação adiante)) e finalmente o código da função, também chamado de "corpo da função", entre chaves ({}).
    function name(parametro1, parametro2, etc) {
        //corpo
    }

    //Nossa nova função pode ser "chamada (called)" por seu nome:
    mostrarMensg();
    mostrarMensg(); //Executa o que está no corpo
    //Sempre colocar os parênteses, mesmo sem nenhum parâmetro.

    //Aqui conseguimos visualisar um dos principais propósitos de funções: evitar duplicação do código. Ou seja, se eu quiser mudar essa mensagem, apenas preciso mudá-la em um lugar: na função da qual está associada.