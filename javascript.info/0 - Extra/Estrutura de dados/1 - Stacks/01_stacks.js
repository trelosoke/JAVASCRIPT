'use strict';
/* Stacks (pilhas) */

//Last-In-First-Out (LIFO)

    //functions: push, pop, peek, length

//Stack em array
    //stack para encontrar palavras em um palíndromo

    let letters = [];  //esse é o stack (arrays já contém as funções de stack)

    let word = "arara"; //palíndromo

    let reversedWord = "";

    //coloca letras de 'word' na stack 'letters'
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    //tira o stack em ordem reversa
    for (let i = 0; i < word.length; i++) {
        reversedWord += letters.pop();
    }

    if (reversedWord == word) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }

//Stacks implementadas no JS    
    let Stack = function() {
        this.count = 0; //rastreia quantos itens tem na stack
        this.storage = {};

        //Adiciona um valor ao final da stack
        this.push = function(value) {
            this.storage[this.count] = value;
            this.count++;
        }

        //Remove e retorna o valor no final da stack
        this.pop = function() {
            if (this.count === 0) {
                return undefined;
            }

            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }

        //retorna o tamanho da stack
        this.size = function() {
            return this.count;
        }

        //Retorna o valor no final da stack
        this.peek = function() {
            return this.storage[this.count-1];
        }
    }

    let myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());

    myStack.push("freeCodeCamp");
    console.log(myStack.size());
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());