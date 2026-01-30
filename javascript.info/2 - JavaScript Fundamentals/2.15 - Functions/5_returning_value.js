'use strict';
//Retornando um valor
    //Uma função pode retornar um valor de volta ao código de chamada como resultado.
    //O exemplo mais simples seria uma função que soma dois valores:
    function soma(a, b) {
        return a + b;
    }

    let resultado = soma(1, 2);
    console.log(resultado); //3

    //A diretiva 'return' pode estar em qualquer lugar da função. Quando a execução a alcança, a função para, e o valor é retornado para o código de chamada (atribuído a 'result' acima).

    //Pode haver muitas ocorrências de 'return' em uma única função. Por exemplo:
    function verificarIdade(idade) {
        if (idade >= 18) {
            return true;
        } else {
            return confirm('Do you have permission from your parents?');
        }
    }

    let idade = prompt('Qual a sua idade?');

    if (verificarIdade(idade)) {
        alert('Acesso permitido');
    } else {
        alert('Acesso negado');
    }

    //É possível usar 'return' sem um valor. Isso faz com que a função saia imediatamente:
    function mostrarFilme(idade) {
        if (!verificarIdade(idade)) {
            return;
        }

        alert("Lhe mostrando o filme");
    }
    //No código acima, se 'verificarIdade(idade)' retorna 'false', então 'mostrarFilme' não continua até 'alert'.

                //Uma função com um return vazio ou sem nenhum retorna 'undefined'
                    //Se uma função não retorna um valor, é o mesmo que ela retornar 'undefined':
                    function fazNada() { /*vazio*/ }

                    console.log(fazNada() === undefined); //true

                    //Um return vazio também é o mesmo que 'return undefined':
                    function fazNadaMesmo() {
                        return;
                    }

                    console.log(fazNadaMesmo() === undefined); //true

                //! - Nunca adicione uma linha entre 'return' e seu valor
                    //Para uma expressão maior dentro de 'return', pode ser tentador colocá-la em uma linha separada, assim:
                    return
                        ('Qualquer coisa ' + 'muito ' + 'grande ' + 'mesmo.')

                    //Isso não funciona, pois o JavaScript assume um ponto e vírgula (semicolon) após 'return':
                    return;
                        ('Qualquer coisa ' + 'muito ' + 'grande ' + 'mesmo.')
                    //Torna-se um 'return' vazio.

                    //Caso queiramos que a expressão retornada abranja várias linhas, devemos começá-la na mesma linha que o 'return'. Ou pelo menos colocar o abre parênteses lá como o seguinte:
                    return (
                        'Qualquer coisa' + 'muito ' + 'grande '
                        + 'mesmo.'
                    )
                    //Irá funcionar como o esperado.