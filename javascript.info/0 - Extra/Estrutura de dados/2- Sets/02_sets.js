'use strict';
/* Sets (conjuntos) */

//Como um array, mas não há valores duplicados e os valores não estão em uma ordem
//O uso típico de um set é verificar a presença de um item

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
        if (!this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    //esse método retornará o tamanho do set
    this.size = function() {    //size é uma propriedade
        collection.length;
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
            return intersectionSet;
        })
    };

    //esse método retorna a diferença de dois sets como um novo set
    this.difference = function(otherSet) {
        let differenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(function(elem) {
            if (!otherSet.has(elem)) {
                differenceSet.add(elem);
            }
            return differenceSet;
        })
    };

    //esse método testa se um set é um subset ou um set diferente
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };

}