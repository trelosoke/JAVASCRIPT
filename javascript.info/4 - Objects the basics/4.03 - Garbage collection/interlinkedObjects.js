'use strict';
//Objetos interconectados
function casar(homem, mulher){
    mulher.marido = homem;
    homem.esposa = mulher;

    return {
        pai: homem,
        mae: mulher
    }
}

let familia = casar({
    name: 'João'
}, {
    name: 'Maria'
});

console.log(familia);

delete familia.pai; //só deletar isso não adianta para torná-lo inacessível, pois { name: 'João' } ainda está associado à "marido" em "mae"

console.log(familia);

delete familia.mae.marido;

console.log(familia); //Agora sim { name: 'João' } foi deletado da memória, já que todas as referências a ele foram deletadas também.

//Por mais que { name: 'João' } referenciasse { name: 'Maria' } (refecencia de saída), isso não importa para o GC. Somente os de entrada (outros que referenciam um) importam na hora de decidir se um objeto é excluído ou não da memória.

//Unreachable island
//Independente de tudo, caso a variável global seja deletada ou sobrescrita, fazendo com que a referência ao objeto seja substituída, todos os objetos aninhados são excluídos da memória.
familia = null;
console.log(familia);