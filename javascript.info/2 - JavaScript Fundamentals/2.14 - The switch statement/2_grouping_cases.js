'use strict';
//Agrupamento de "case"
    //Muitas variantes de 'case' que compartilham o mesmo código podem ser agrupadas.
    //Por exemplo, se queremos que o mesmo código execute em "case 3" e "case 5":
    let a = 3;

    switch (a) {
        case 4:
            console.log('Certo!');
            break;
        case 3: //(*) Dois "cases" agrupados
        case 5:
            console.log('Errado!');
            console.log('Por que não procuras estudar matemática?');
            break;
        
        default:
            console.log('O resultado é estranho. Sério.')
    }

    //Agora ambos 3 e 5 mostram as mesmas mensagens.
    //A habilidade de agrupar "cases" é um efeito colateral de como o switch-case funciona sem "break". Aqui a execução de "case 3" começa da linha (*) e percorre "case 5" porque não há "break".