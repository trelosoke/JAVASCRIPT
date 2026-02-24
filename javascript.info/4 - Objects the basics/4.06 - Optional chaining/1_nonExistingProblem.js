'use strict';
//O problema da propriedade "inexistente"
    //Se você acabou de começar a ler o tutorial e aprender JavaScript, talvez esse problema ainda não foi apresentado para você, mas é bem comum.
    //Como exemplo, vamos dizer que temos objetos 'user' que carregam informações sobre nossos usuários. A maioria dos usuários têm o endereço na propriedade 'user.address', com a rua em 'user.address.street', mas alguns não provêm isso.
    
    //Em tais casos, quando tentamos obter 'user.address.street' e acontece de o usuário estar sem um endereço, obtemos um erro:
    let user = {}; //um usuário sem a propriedade 'address'
    //console.log(user.address.street); //não é possível acessar as propriedades de 'undefined'.

    //Esse é o resultado esperado. JavaScript funciona assim. Como 'user.address' é 'undefined', uma tentativa de obter 'user.address.street' falha com um erro.

    //Em muitos casos práticos, é preferível obter 'undefined' ao invés de um erro aqui (significando somente que não há 'street').


    //Outro exemplo: No Desenvolvimento Web, podemos obter um objeto que corresponde a um elemento de uma página usando uma chamada de método especial, tal como 'document.querySelector('.elem')', e ele retorna 'null' quando não há tal elemento.
    let html = document.querySelector('.elem').innerHTML; //erro no console do navegador se for null


    //Novamente, se o elemento não existe, obteremos um erro acessando a propriedade '.innerHTML' de 'null'. E em alguns casos, quando a ausência do elemento é normal, gostariamos de evitar o erro e só aceitar 'html = null' como resultado.
    //Como fazer isso?
    
    //A solução óbvia seria verificar o valor utilizando 'if' ou o operador condicional '?' antes de acessar sua propriedade:
    let user2 = {};
    console.log(user2.address ? user2.address.street : undefined);

    //Isso funcionaria, mas é um código muito poluído. o 'user2.address' aparece duas vezes, por exemplo.
    //Aqui é como o mesmo seria com o 'document.querySelector':
    //let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

    //Podemos ver que a busca do elemento (document.querySelector('.elem')) está sendo chamada duas vezes, que não é algo bom.


    //Para propriedades profundamente aninhadas, torna-se ainda mais feio, já que mais repetições são necessárias.
    //P.ex. vamos usar 'user.address.street.name' em estilo similar:
    let user3 = {};
    console.log(user.address ? user.address.street ? user.address.street.name : null : null);

    //Esse código é horrível. Muito pouco legível. Alguém que fosse lê-lo provavelmente demoraria a entender.

    //Há uma maneira um pouco melhor de escrevê-lo usando o operador AND (&&):
    let user4 = {};
    console.log(user4.address && user4.address.street && user4.address.street.name); //undefined, sem erro

    //Mesmo o AND analisando se cada componente existe (caso não, a avaliação para), a escrita ainda é muito grande e pouco legível.

    //Por isso que o "optional chaining (encadeamento opcional)" foi implementado na linguagem. Para resolver esse problema de uma vez por todas.