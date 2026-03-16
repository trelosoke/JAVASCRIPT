'use strict';
//Symbols
    //Um 'symbol' representa um "identificador único". Um valor desse tipo pode ser criado utilizando "Symbol()":
    let symb = Symbol();

    //Ao criar, podemos dar uma descrição aos 'symbols' (também chamados 'symbol name'), mais usado para depuração:
    let id = Symbol("id");  //'id' é um 'symbol' com a descrição "id".

    //É garantido que 'symbols' sejam únicos. Mesmo se criarmos vários 'symbols' com a exata mesma descrição, eles têm valores diferentes. A descrição é só um rótulo que não afeta nada.

    //Por exemplo, aqui há dois 'symbols' com a mesma descrição, eles não são iguais:

    let id1 = Symbol("id");
    let id2 = Symbol("id");

    console.log(id1 == id2); //false


    //Se você se familiariza com Ruby ou outra linguagem que também tem algum tipo de 'symbol', por favor, não se engane. Os 'symbols' do JavaScript são diferentes.

    //Então, para resumir, um 'symbol' é um "valor primitivo único" com descrição opcional. Veremos onde pode ser utilizado.

                //'Symbols' não se auto-convertem para uma string
                    //A maioria dos valores no JavaScript suporta uma conversão implícita para uma string. Por exemplo, podemos dar um 'alert' em quase qualquer valor. 'Symbols' são especiais. Eles não se auto-convertem.

                    //Por exemplo, esse console.log mostrará um erro:
                    let id3 = Symbol("id3");
                    //alert(id3); TypeError: Cannot converto a Symbol to a string

                    //Isso é um "language guard" contra bagunças, pois strings e 'symbols' são fundamentalmente diferentes e não deveriam converter um ao outro.

                    //Se quisermos realmente exibir um 'symbol', precisamos explicitamente chamar '.toString()' nele, como aqui:
                    let id4 = Symbol("id");
                    alert(id.toString());   //Symbol(id), agora funciona

                    //Ou obter a propriedade 'symbol.description' para mostrar apenas a descrição:
                    let id5 = Symbol("id");
                    alert(id.description);