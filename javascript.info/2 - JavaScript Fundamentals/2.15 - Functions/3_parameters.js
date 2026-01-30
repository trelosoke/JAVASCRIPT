'use strict';
//Parâmetros
    //Podemos passar dados arbitrários (escolhidos sem critério, apenas porque "sim") para funções usando parâmetros.
    //No exemplo abaixo, a função tem dois parâmetros: 'de' e 'texto'.
    function mostrarMensg(de, texto) {
        console.log(de + ': ' + texto);
    }

    mostrarMensg('Anna', 'Olá!'); //Anna: Olá! (*)
    mostrarMensg('Anna', 'E aí?'); //Anna: E aí? (**)

    //Quando a função é chamada nas linhas (*) e (**), os valores fornecidos são copiados para as variáveis locais 'de' e 'texto'. E então, a função os usa.

    //Aqui está mais um exemplo: temos uma variável 'de' e passamos para a função. Por favor note: a função muda 'de', mas a mudança não é vista externamente, pois a função sempre obtém uma cópia do valor:
    function mostrarMensagem(de, texto) {
        de = '*' + de + '*';
        
        console.log(de + ': ' + texto);
    }

    let de = 'Anna';

    mostrarMensagem(de, 'Olá');

    console.log(de); //Anna

    //Ao chamar a função, colocamos uma variável chamada 'de' como primeiro argumento do parâmetro 'de'. Ao fazer isso, todas as mudanças que a função fizesse com esse valor não seria mudado na variável externa à função. O exemplo disso é que 'de' havia sido mudado para '*' + de + '*' e ao mostrar novamente a variável após a chamada da função, nada com ela aconteceu.

    //Quando um valor é passado como um parâmetro de função, também é chamado de argumento.
        // - Um parâmetro é a variável listada dentro dos parênteses na identificação de função (é um termo de momento da "declaration");
        // - Um argumento é o valor passado para a função quando ela é chamada (é um termo de momento da chamada / call time).