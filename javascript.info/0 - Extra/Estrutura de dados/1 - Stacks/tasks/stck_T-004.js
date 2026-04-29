/* 
### **Tarefa 4 – Use a Stack personalizada para refazer o palíndromo**

Pegue a função construtora `Stack` que você estudou (contador + objeto `storage`) e **use-a** para verificar palíndromos, em vez do array puro.

- Crie uma função `ehPalindromoComStack(palavra)`.
- Dentro dela instancie `new Stack()`.
- Empilhe todas as letras com `push`, depois desempilhe com `pop` para montar a palavra invertida.
- Compare com a original.

Essa tarefa serve para você se acostumar com a API da sua pilha personalizada e entender que ela resolve exatamente o mesmo problema que o array.
*/

function MyStack() {
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

function ehPalindromoComStack(palavra = '') {
    if (palavra === '') {
        return false;
    }

    let letras = new MyStack();
    let palavraInvertida = '';

    for (let i = 0; i < palavra.length; i++) {
        letras.push(palavra[i]);
    }

    for (let i = 0; i < palavra.length; i++) {
        palavraInvertida += letras.pop();
    }

    return palavraInvertida === palavra;
}

console.log(ehPalindromoComStack("arara"));