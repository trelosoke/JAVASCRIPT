'use strict';
//Objetos
    //Como sabemos do tópico "Data Types", Há oito tipos de dado no JavaScript. Sete deles são chamados de "primitivos", pois seus valores contém apenas uma única coisa (seja um número, uma string, etc).
    
    //Em contraste, objetos são utilizados para armazenas coleções de chaves de vários dados e entidades mais complexas. No JavaScript, objetos habitam quase todo aspecto da liguagem. Então, devemos entendê-los primeiro antes de nos aprofundarmos em qualquer outro assunto.

    //Um objeto pode ser criado com chaves '{}' com uma lista opcional de propriedades. Uma propriedade é um par de "key: value (chave: valor)", no qual key é uma string (também chamada de nome da propriedade) e value pode ser qualquer coisa.

    //Podemos imaginar um objeto como um armário com arquivos assinados. Cada pedaço de dado é armazenado em seu arquivo pela chave. É fácil de encontrar um arquivo por seu nome ou adicionar/removê-lo.

    //Um objeto vazio ("armário vazio") pode ser criado uma de duas sintaxes:
    let user = new Object(); //sintaxe "object constructor"
    let user2 = {}; //sintaxe "objeto literal"

    //Geralmente, as chaves '{}' são mais utilizadas. Essa declaração chama-se "object literal".