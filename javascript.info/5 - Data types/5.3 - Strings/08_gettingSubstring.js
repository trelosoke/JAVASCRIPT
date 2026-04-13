'use strict';
//Obtendo uma sub-string
    //Há 3 métodos no JavaScript para obter uma sub-string: 'substring', 'substr' e 'slice'.
        //str.slice(começo [, final])
            //Retorna a parte da string do começo até (mas não incluindo) o final:
                let str = "stringify";

                console.log(str.slice(0, 5)); //'strin', a substring de 0 até 5 (sem incluir a 5) 
                console.log(str.slice(0, 1)); //'s', de 0 a 1, mas não incluindo 1

            //Caso não haja segundo argumento, então 'slice' vai até o final da string:
                str = "stringify";
                console.log(str.slice(2)); //'ringify', começou da posição 2 e foi até o final da string

            //Valores negativos para 'começo/final' também são possíveis. Eles significam que a posição é contada a partir do final da string:
                str = "stringify";

                //começa na 4ª posição da direita, termina no primeiro da direita
                console.log(str.slice(-4, -1)); //gif

        //str.substring(começo [, final])
            //Retorna a parte da string ENTRE o começo e o final (não incluindo o final).
            //É quase o mesmo que 'slice', mas permite o começo ser maior que o final (nesse caso, ele simplesmente troca os valores do começo e final entre si):
                str = "stringify";

                //esses são a mesma coisa para o 'substring'
                console.log(str.substring(2, 6)); //"ring"
                console.log(str.substring(6, 2)); //"ring"

                //...mas não para 'slice':
                console.log(str.slice(2, 6)); //ring
                console.log(str.slice(6, 2)); //"" - uma string vazia

            //Argumentos negativos não são suportados (ao contrário do 'slice'), são tratados como 0.

        //str.substr(começo [, length])
            //Retorna a parte da string do começo, com o dado "length (tamanho)".
            //Em contraste com os métodos anteriores, esse nos permite especificar o "length" ao invés da posição do final:
                str = "stringify";
                console.log(str.substr(2, 4)); //'ring', começa da posição 2 e obtém 4 caracteres (após a posição 2)

            //O primeiro argumento pode ser negativo, para contar pelo final:
                str = "stringify";
                console.log(str.substr(-4, 2)); //'gi', da 4ª posição obtém 2 caracteres

            //Esse método está no Anexo B (https://tc39.es/ecma262/#sec-string.prototype.substr) da especificação da linguagem. Significa que apenas engines (motores) JavaScript hospedados em navegadores suportam, e não é recomendado. Na prática, é suportado em todo lugar.

                //Qual escolher?
                    //Todos fazem o trabalho. Porém, 'substr' não deve ser usado, pois é um método que tem algumas inconsistências, podendo ser removido da linguagem.
                    //Para uso prático, seria necessário saber somente o 'slice'.