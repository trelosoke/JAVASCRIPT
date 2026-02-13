'use strict';
//Comparação por referência
    //Dois objetos são iguais apenas se eles são o mesmo objeto. Por exemplo, aqui 'a' e 'b' referenciam o mesmo objeto, portanto, são iguais:
    let a = {};
    let b = a; //copiado por referência

    console.log(a == b); //true, ambas referenciam o mesmo objeto, logo, têm o mesmo valor.
    console.log(a === b); //true, ambos são do mesmo tipo: objeto.

    //E aqui, dois objetos independentes não são iguais, mesmo que eles pareçam (ambos sendo vazios):
    let c = {};
    let d = {};

    console.log(c == d); //false

    //Para comparações como 'obj1 > obj2' ou para comparação com um primitivo 'obj == 5', objetos são convertidos para primitivos. Iremos estudar como conversões de objetos funcionam em breve, mas para falar a verdade, essas comparações são usadas raramente. Elas normalmente aparecem como resultado de um erro de programação.

                //Objetos 'const' podem ser modificados
                    //Um efeito colateral importante de armazenar objetos como referência é que eles declarados como 'const' podem ser modificados:
                    const user = {
                        name: 'John',
                    };

                    user.name = 'Pete'; //(*)
                    console.log(user.name); //Pete

                    //Pode parecer que a linha (*) daria erro, mas não dá. O valor 'user' é constante, deve sempre referenciar o mesmo objeto, mas as propriedades desse objeto são livre para modificação.

                    //Em outras palavras, o 'const user' retorna um erro somente se tentarmos definir 'user = ...' como um todo.

                    //Dito isso, se realmente necessitarmos fazer propriedades constantes de objetos, também é possível, mas usando métodos totalmente diferentes. Será mencionado mais para frente no capítulo "Flags e descritores de propriedade".