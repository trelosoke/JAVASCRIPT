'use strict';
/* 
Crie um objeto chamado config usando a sintaxe de literal de objeto (abrindo e fechando chaves {}).

Crie um Symbol chamado id.

Coloque o Symbol dentro do objeto no momento da criação (não depois).

Adicione também uma propriedade comum chamada theme: "dark".

Dica: Lembre-se de usar colchetes [] dentro do objeto para a chave do Symbol.
*/

let id = Symbol("id");

let config = {
    [id]: "MEU_ID",
    theme: 'dark',
};