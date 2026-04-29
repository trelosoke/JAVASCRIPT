/* 
### **Tarefa 5 – Construa sua própria Stack do zero (o ápice)**

Agora você vai implementar **do zero** uma função construtora `Stack` com os seguintes métodos:

- `push(elemento)` – adiciona um elemento ao final da pilha.
- `pop()` – remove e retorna o elemento do topo. Se vazia, retorna `undefined`.
- `peek()` – retorna o elemento do topo sem removê-lo.
- `size()` – retorna quantos itens estão na pilha.
- `isEmpty()` – retorna `true` se a pilha estiver vazia, senão `false`.

**Regras de ouro:**

- Não vale copiar o código original – feche a aba e escreva a lógica você mesmo.
- Você pode escolher o armazenamento interno (objeto como no exemplo, ou um array, ou outro jeito). Mas os métodos devem existir e funcionar perfeitamente.
- Depois de pronto, crie pelo menos 5 testes diferentes mostrando todos os métodos em ação, incluindo sequências de `push`, `pop`, `peek` e `isEmpty`.

**Entrega esperada:**

Uma função construtora `Stack` (ou classe ES6 se preferir) que se comporte exatamente como a que você estudou, mas que saiu da sua cabeça.
*/

function MyStackConstruct() {
    this.storage = {};
    this.count = 0;

    this.push = function(value) {
        this.storage[this.count] = value;
        ++this.count;
    };

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        };

        --this.count;
        let poppedElem = this.storage[this.count];
        delete this.storage[this.count];
        return poppedElem;
    };

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count - 1];
    }

    this.isEmpty = function() {
        return this.count === 0;
    }
}

let oi = new MyStackConstruct();
oi.push(1);
oi.push('alo');

console.log(oi.size()); //2
console.log(oi.peek()); //alo
console.log(oi.isEmpty()); //false

console.log(oi.pop()); //alo
console.log(oi.size()); //1

console.log(oi.pop()); //1
console.log(oi.isEmpty()); //true