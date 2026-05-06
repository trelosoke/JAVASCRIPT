/* 
Tarefa 4 – Corrija e use o MySet fornecido para operações de conjunto
O código que você estudou tem pequenos bugs (ex: intersection e difference retornam dentro do loop errado). Sua missão:

Descubra os erros testando o código. Execute MySet com exemplos simples e observe onde o comportamento difere do esperado.

Corrija os métodos problemáticos (sem olhar a solução pronta, raciocine).

Depois de corrigido, use seu MySet para resolver os seguintes problemas:

União de dois conjuntos: new MySet() com dados [1,2,3] e outro com [3,4,5] → deve retornar um conjunto com 1,2,3,4,5.

Interseção: [1,2,3] e [2,3,4] → [2,3].

Diferença: [1,2,3] e [2,3,4] → [1].

Subconjunto: teste se [1,2] é subconjunto de [1,2,3] (true) e se [1,4] é subconjunto (false).

Importante: não use os métodos nativos do ES6 nessa tarefa – apenas seu MySet corrigido.
*/

//União de dois conjuntos: new MySet() com dados [1,2,3] e outro com [3,4,5] → deve retornar um conjunto com 1,2,3,4,5.
let set1 = new MySet();
let set2 = new MySet();

set1.add(1);
set1.add(2);
set1.add(3);

set2.add(3);
set2.add(4);
set2.add(5);

let setUnion = set1.union(set2);

console.log(setUnion.values()); //[ 1, 2, 3, 4, 5 ]

//Interseção: [1,2,3] e [2,3,4] → [2,3].
let interSet1 = new MySet();
let interSet2 = new MySet();

interSet1.add(1);
interSet1.add(2);
interSet1.add(3);

interSet2.add(2);
interSet2.add(3);
interSet2.add(4);

let setInter = interSet1.intersection(interSet2);

console.log(setInter.values()); //[ 2, 3 ]

//Diferença: [1,2,3] e [2,3,4] → [1].
let diffSet1 = new MySet();
let diffSet2 = new MySet();

diffSet1.add(1);
diffSet1.add(2);
diffSet1.add(3);

diffSet2.add(2);
diffSet2.add(3);
diffSet2.add(4);

let setDiff = diffSet1.difference(diffSet2);

console.log(setDiff.values()); //[ 1 ]

//Subconjunto: teste se [1,2] é subconjunto de [1,2,3] (true) e se [1,4] é subconjunto (false).

let set = new MySet();
let subSet1 = new MySet();
let subSet2 = new MySet();

set.add(1);
set.add(2);
set.add(3);

subSet1.add(1);
subSet1.add(2);

subSet2.add(1);
subSet2.add(4);

console.log(subSet1.subset(set)); //true
console.log(subSet2.subset(set)); //false


function MySet() {
    //a variável 'collection' irá guardar o set
    let collection = [];

    //esse método irá verificar a presença de um elemento e retornar true ou false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    //esse método retornará todos os valores do set
    this.values = function() {
        return collection;
    };

    //esse método adicionará um elemento ao set
    this.add = function(element) {  //No ES6 retorna o set como um todo (não um array nem um boolean)
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    //esse método removerá um elemento do set
    this.remove = function(element) {   //no JS, é '.delete'
        if (this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    //esse método retornará o tamanho do set
    this.size = function() {    //size é uma propriedade
        return collection.length;
    };

    //os métodos abaixo não estão no ES6

    //esse método retornará a união de dois sets
    this.union = function(otherSet) {
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(elem) {
            unionSet.add(elem);
        });

        secondSet.forEach(function(elem) {
            unionSet.add(elem);
        });

        return unionSet;
    };

    //esse método retorna a intersecção de dois sets como um novo set
    this.intersection = function(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(function(elem) {
            if (otherSet.has(elem)) {
                intersectionSet.add(elem);
            }
        });

        return intersectionSet;
    };

    //esse método retorna a diferença de dois sets como um novo set
    this.difference = function(otherSet) {
        let differenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(function(elem) {
            if (!otherSet.has(elem)) {
                differenceSet.add(elem);
            }
        });

        return differenceSet;
    };

    //esse método testa se um set é um subset ou um set diferente
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };

}