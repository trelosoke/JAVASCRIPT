'use strict';
//Algoritmos internos
                //O que é um algoritmo (em suma)?
                    //Um conjunto de instruções passo a passo para resolver um problema. Descreve o processo lógico que deve ser seguido para tal.
                    //No nosso caso, irá mostrar como é a lógica de atuação do 'garbage collection' no JavaScript.

    //O algoritmo básico do 'garbage collection' é chamado "mark-and-sweep", ou "marcar-e-varrer". 
    
    //A explicação é simples: 
        //O 'garbage collection' obtém os 'roots' e os marca (lembra);
        //Então visita e marca todas as referências a partir deles (dos roots);
        //Então visita objetos marcados e marca as referências deles. Todos os objetos visitados são lembrados, para que não sejam visitados novamente duas vezes futuramente.
        //E continua até que cada referência (a partir dos 'roots') alcançável seja visitada. 
        //Ao final, varre (sweep) a memória, removendo todos os objetos que não foram "marcados", ou seja, aqueles que se tornaram inalcançáveis.

    //Podemos imaginar o processo como derramar um grande balde de tinta a partir dar raízes, que flui por todas as referências e marca todos os objetos alcançáveis. Os não marcados são removidos.


    //Esse é o conceito de como a 'coleta de lixo' do JavaScript funciona. A engine do JS aplica muitas otimizações para executar mais rápido e não introduzir quaisquer atrazos dentro do código de execução.

    //Algumas otimizações:
        //Coleção geracional (Generational collection)
            //Objetos são divididos em dois grupos: "novos" e "antigos". A maioria dos objetos em programas JavaScript vive pouco tempo (resultados temporários, strings de cálculo, etc). Então, faz mais sentido o 'garbage collection (GC)' focar em objetos NOVOS, que morrem rápido, limpando rapidamente os que já não são usados.
            
            //Objetos que sobrevivem por mais tempo pelo GC passam para a geração ANTIGA e são verificados com menos frequência. Isso acontece com objetos que precisam ser utilizados por mais tempo, então o GC detecta isso e passa a analisá-lo com menos frequência, assim diminuindo o tempo de análise.

        //Coleta incremental (Incremental collection)
            //Se há muitos objetos e tentamos adentrar e marcar todos os objetos de uma vez, levará um tempo e introduzirá claros atrazos na execução.

            //É por isso que o GC divide o trabalho em partes menores, como se fossem vários pequenos 'garbage collectors'. Isso requer algum registro extra para rastrear alterações, mas obtemos vários pequenos atrazos nas partes ao invés de um grande atrazo.

        //Coleta em tempo-ocioso (Idle-time collection)
            //O GC tenta executar apenas enquanto a CPU está menos ocupada. Assim, o impacto sobre a execução do código é minimizado. Como aproveitar os momentos de "suspiro" do programa para fazer a limpeza.