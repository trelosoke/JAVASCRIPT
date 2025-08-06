'use strict';
//Algoritmo básico do Garbage Collectior é o "mark-and-sweep", que em português fica "marcar-e-varrer".
    //O processo ocorre da seguinte forma:
    //1. o GD analisa marca os roots, como forma de lembrá-los;
    //2. dentro dessas roots, são seguidas as suas referências e marcadas.
    //3. o processo de marcação das referências continua até não restar nenhuma.
    //4. os objetos que não foram visitados ou marcados no processo são excluídos da memória.