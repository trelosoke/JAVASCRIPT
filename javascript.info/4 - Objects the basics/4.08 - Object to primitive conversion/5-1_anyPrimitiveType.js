'use strict';
//Uma conversão pode retornar qualquer tipo primitivo
    //A coisa importante a saber sobre todos os métodos de conversão de primitivos é que eles não necessariamente retornam o primitivo com um "hint".

    //Não há controle se 'toString' retorna exatamente uma string, ou se o método 'Symbol.toPrimitive' retorna um número para a hint "number".

    //A única coisa obrigatória: esses métodos devem retornar um primitivo, não um objeto.
                //Notas históricas
                    //Por razôes históricas, se 'toString' ou 'valueOf' retornarem um objeto, não há erro, mas tal valor é ignorado (como se o método não existisse). Isso é porque em tempos antigos não habia o conceito de "erro" ser bom no JavaScript. Aparecer um erro que para seu código e qual foi o erro é essencial para que você saiba exatamente o que aconteceu de errado com seu código. Esses dois métodos fazem com que os "erros" sejam silenciosos:

                        let meuObjeto = {
                            valueOf() {
                                return {mensagem: "sou um objeto, não um número"}; //Retorna um objeto: ignorado completamente, como se não existisse.
                            },

                            toString() {
                                return "Agora sim, uma string"; //Retorna um primitivo
                            }
                        };

                        console.log(+meuObjeto); //Retorna NaN, pois o 'toString()' não pôde ser convertido em number. Mas sem erro.

                    //Em contraste, 'Symbol.toPrimitive' é mais estrito, ele deve retornar um primitivo, caso não haverá um erro.

                        let energia = {
                            valor: 100,

                            [Symbol.toPrimitive](hint) {
                                console.log(`O JS pediu um(a): ${hint}`);

                                //Se o JS estiver tentando usar como número (cálculos)
                                if(hint === "number") {
                                    return this.valor;
                                }
                                
                                //Se o JS estiver tentando usar como texto (alert ou chave de objeto)
                                if(hint === "string") {
                                    return `${this.valor} HP`;
                                }

                                //"default", em operações como o símbolo de "+" binário
                                return this.valor;
                            }
                        };

                        //testando
                        alert(+energia);
                        alert(`Status ${energia}`);
                        alert(energia + 50);

                        
                        //e com objeto
                        let objeto = {
                            [Symbol.toPrimitive](hint) {
                                return {erro: "quebrei o JS"};
                            }
                        };

                        alert(objeto);
                        //Uncaught TypeError: Failed to execute 'alert' on 'Window': Cannot convert object to primitive value.