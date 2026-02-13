'use strict';
//Objetos interconectados
    //Agora um exemplo mais complexo. A família:
    function casar(homem, mulher) {
        mulher.marido = homem;
        homem.esposa = mulher;

        return {
            pai: homem,
            mae: mulher
        }
    }

    let familia = (casar({
        name: 'John'
    }, {
        name: "Ann"}));

    console.log(familia);
    //A função 'casar' "casa" dois objetos fornecendo-os referências um para o outro e retornando um novo objeto que contém ambos.
    
    //Até agora, todos os objetos são 'reachable'. Agora vamos remover duas referências:
    delete familia.pai;
    delete familia.mae.marido;

    //Não é suficiente deletar apenas um dos dois, pois ambos fazem referência ao objeto dentro de 'familia'. Quando deletamos todas as referências a esse objeto, ele passa a não ser mais 'reachable' e é descartado pelo 'garbage collector'.

    //Referências de saída (objeto 'homem' referenciando o objeto 'mulher') não importam. Somente as de entrada (algo referenciando 'homem') podem fazer o objeto ser alcançável. Então o objeto 'homem' agora está inalcançável e será removido da memória com todos os seus dados.

    //Depois do 'garbage collection', sobra apenas a propriedade 'mae' e o objeto 'mulher'.
    console.log(familia);

    familia = {};
    familia = (casar({
        name: 'John'
    }, {
        name: "Ann"}));
//"Ilha" inalcançável
    //É possível que um conjunto inteiro de objetos interligados seja inacessivel e removido da memória, como uma ilha inteira isolada, por isso a metáfora.
    //O objeto de origem é o mesmo que o de cima:
    familia = null;
    
    //O objeto dentro de 'familia' foi desconectado do 'root'. Então independentemente de as propriedades referenciarem entre si, o objeto que armazenava isso agora foi deletado pelo 'garbage collector' pois não há mais referência a ele.