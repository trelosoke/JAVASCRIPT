'use strict';
//Limitações dos nomes das propriedades
    //Como já sabemos, uma variável não pode ter seu nome igual a umas das palavras reservadas da linguagem, como "for", "let", "return", etc.
    //Mas para a propriedade de um objeto, não há tal restrição:
    let obj = {
        for: 1,
        let: 2,
        return: 3,
    };

    console.log(obj.for + obj.let + obj.return); //6

    //Em suma, não há limitações em nomes de propriedades. Elas podem ser qualquer string ou "symbols" (um tipo especial para identificadores, será coberto depois).

    //Outros tipos são automaticamente convertidos para strings. Por exemplo, um número 0 torna-se uma string "0" quando usado como uma chave de propriedade:
    let objeto = {
        0: "teste", //O mesmo que "0": "teste"
    };

    //Ambos os console.log acessam a mesma propriedade:
    console.log(objeto[0]); //Convertido para string
    console.log(objeto["0"]);

    //Há um pequeno problema com uma propriedade especial nomeada '__proto__'. Não podemos defini-la como um valor não-objeto:
    let obj2 = {};
    obj2.__proto__ = 5;
    console.log(obj2.__proto__); //Enquanto __proto__ não for um objeto, nada acontece.Nesse caso, 5 é ignorado.
    //Iremos cobrir a natureza especial de __proto__ em capítulos posteriores, e sugerir formas de concertar tal comportamento.