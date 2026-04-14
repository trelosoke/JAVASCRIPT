'use strict';
//Internos
    //Um array é um tipo especial de objeto. Os colchetes utilizados para acessar uma propriedade 'array[0]' na verdade vem da sintaxe de objeto. Isso é essencialmente o mesmo que 'objeto[chave]', onde 'array' é o objeto, enquanto os números são utilizados como chaves.

    //Eles expandem os objetos, fornecendo métodos especiais para trabalhar com coleções ordenadas de dados e também a propriedade 'length'. Mas em se núcleo, ainda é um objeto.

    //Lembre-se, há apenas oito tipos de dados básicos no JavaScript (veja o capítulo "Data types (https://javascript.info/types)"). Array é um objeto e, portanto, comporta-se como um.

    //Por exemplo, é copidado por referência:
        let frutas = ["Banana"];

        let array = frutas; //copiado por referência (duas variáveis referenciam o mesmo array)

        console.log(array === frutas); //true

        array.push("Pera");

        console.log(frutas); //[ 'Banana', 'Pera' ], 2 frutas agora
    
    //…Mas o que faz arrays realmente especiais são representações internas. A engine (motor) tenta armazenar seus elementos em uma área de memória contígua (ou seja, um logo após o outro, sem espeços vazios entre eles), e há outras otimizações também, para fazer arrays funcionarem bem rápido.

    //Mas todos eles quebram se pararmos de trabalhar com um array como uma "coleção ordenada" e começarmos a trabalhar com ele como se fosse um objeto comum. Por exemplo, tecnicamente podemos fazer isso:
        frutas = []; //faz um array

        frutas[99999] = 5 //atribui uma propriedade com o índice muito maior que seu comprimento

        frutas.age = 25 //cria uma propriedade com um nome qualquer

    //Isso é possível, porque arrays são objetos em sua base. Podemos adicionar quaisquer propriedades a eles.

    //Mas a engine verá que estamos fazendo isso. Tais casos não se enquadram nas otimizações específicas para arrays e elas serão desligadas. Seus benefícios desaparecerão.

    //As formas de usar um array incorretamente:
        // - adicionar uma propriedade não numérica como 'array.teste = 5';
        // - fazer "buracos", como: adicionar 'array[0]' e então 'array[1000]' (e nada entre eles).
        // - preencher o array na ordem inversa, como 'array[1000]', 'array[999]', e assim por diante.

    //Por favor, pense em arrays como estruturas especiais que funcionam com dados ordenados. Eles provêm métodos especiais para isso. Arrays são cuidadosamente otimizados dentro da engine do JavaScript para funcionar com dados ordenados contíguos, por favor use-os dessa forma. E se você precisar de qualquer outra chave, são altas as chances de, na verdade, você precisar de um objeto comum '{}'.