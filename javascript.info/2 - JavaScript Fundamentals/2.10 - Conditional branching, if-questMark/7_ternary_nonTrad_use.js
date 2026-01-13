'use strict';
//Uso não tradicional de '?'
    //Algumas vezes, '?' é utilizado como substituto para 'if':
    let empresa = 'Netscape';

    (empresa == 'Netscape') ?
        console.log('Correto!') : console.log('Errado!');

    //NÃO é recomendado usar. Por mais de ser mais curto, é menos legível.
    //Usando o 'if'
    // if(empresa == 'Netscape') {
    //     console.log('Correto!');
    // } else {
    //     console.log('Errado!')
    // }

    //Nossa mente entende melhor ações executadas verticalmente do que várias ações horizontalmente (em uma única linha)

    //A função de '?' é retornar um valor ou outro dependendo da condição. Use-o para isso. Use 'if' quando necessitar executar diferentes ramificações de código