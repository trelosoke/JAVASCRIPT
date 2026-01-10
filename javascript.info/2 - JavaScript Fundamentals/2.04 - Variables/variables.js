'use strict'
//Na maioria das vezes, um aplicativo JavaScript trabalha e necessita de informações, como:
    // 1. Uma loja on-line: as informações devem incluir mercadorias à venda e um carrinho de compras;
    // 2. Uma aplicativo de chat: as informações devem incluir usuários, mensagens e muito mais.

//Variáveis são utilizadas para armazenar essas informações.

//Uma variável
    //Uma variável é um armazenamento de dados que contém nome, podendo ser utilizada para armazenar mercadorias, visitantes e outros tipos de dados.
    //Para criar uma variável no JS, use a palavra-chave let. A declaração abaixo cria (declara) uma variável com o nome "message":
    
    let message1;

    //Agora, podemos atribuir algum dado nela utilizando o operador =:

    message1 = 'Hello'; //Armazena a string 'Hello' dentro da variável nomeada message

    //A string está agora salva dentro da área da memória do computador associada com a variável. Podemos saber disso ao mostrar na tela ou no console.

    console.log(message1); //Mostra o conteúdo da variável

    //Para ser mais conciso, conseguimos declarar (definir) uma variável e atribuir seu valor em uma mesma linha:
    
    let message2 = 'Hello 2'; //definimo-la como message2 e atribuimos seu valor como a string 'Hello 2'
    console.log(message2);

    //É possível declarar várias variáveis em uma única linha:

    let user1 = 'John', age1 = 25, message3 = 'Hello 3'; // Mesmo sendo pequeno, não é recomendado deixar cada variável em uma única linha, pois dificulta a legibilidade. Abaixo, estão algumas formas de separá-las:

        // 1 - Declará-las individualmente com let em cada.
        let user2 = 'John';
        let age2 = 25;
        let message4 = 'Hello 3';
            //É a melhor maneira para legibilidade.
        
        // 2 - Permanecer com vírgula, mas quebrar a linha.
        let user3 = 'John', 
            age3 = 25, 
            message5 = 'Hello 3'; 
            //Dessa forma, permanece apenas uma declaração visual (apenas um ponto e vírgula / let)
        
        // 3 - Estilo "comma-first" ou vírgula primeiro.
        let user4 = 'John'
          , age4 = 25
          , message6 = 'Hello 3';
            //Quase idêntico ao anterior, mas com o operador comma, ou vírgula, vindo primeiro na quebra de linha.
    
    //Tecnicamente, todas essas formas resulta na mesma coisa. Porém, sempre é recomendado o mais legível.

        //comentário:
         //Em scripts antigos, pode-se encontrar a palavra-chave "var" para declarar uma variável. Elas fazer praticamente a mesma coisa.
         //Há algumas diferenças entre var e let, mas por enquanto não nos é útil.
         //Continue utilizando let.

//Uma analogia da vida real
    //Podemos facilmente entender o conceito de uma "variável" se imaginarmos como uma "caixa" para dados, com um adesivo unicamente nomeado nela.
    //É possível colocar (atribuir) qualquer valor nessa caixa. Podemos também mudá-la quantas vezes quisermos:
    
    let mensagem;
    mensagem = 'Hello';
    mensagem = 'World!';
    console.log(mensagem);

    //Quando se muda o valor, os dados antigos são removidos da variável.

    //Também é possível declarar duas variáveis e copiar os dados de uma para dentro da outra:
    
    let hello = 'Hello World';
    let hello2;

    //copia 'Hello World' da variável "hello" para dentro de hello2
    hello2 = hello;
    console.log(hello2);

        //comentário
          //Declarar duas vezes a mesma variável resultará em erro:
          /*
          let numero = 10;
          let numero = 20; 
          */
          //O correto é declarar ela uma vez e depois referenciá-la:
          /*
          let numero = 10;
          numero = 20; 
          */

        //comentário
          //Linguagens funcionais
            //Algumas linguagens, denominadas puramente funcionais, como a Haskell, não permitem mudar o valor de variáveis após declaradas. Ou seja, uma vez "numero" sendo "10", será para sempre. para que seja outro, deve-se criar uma outra variável.
            //A pesar disso parecer estranho, pode ser muito útil para evitar mudança de variáveis em algum lugar do código, entre outros aspectos.
    
//Nomeando Variáveis
    //Há duas limitações no nome de variáveis no JavaScript:
        // 1. O nome deve conter somente letras, dígitos ou os símbolos $ e _ (não, hífens não são permitidos).
        // 2. O primeiro caractere não pode ser um número

    //Exemplo de nomes válidos:
    let userName;
    let teste123;

    //Quando um nome contém multiplas palavras, o camelCase é bastante usado, isto é, palavras sem espaço entre elas, cada uma começando com uma letra maiúscula, sendo a da primeira palavra opcional. Exemplo: meuNomeBemLongo.
    
    //Os símbolos $ e _ podem ser usados como nomes:
    let $ = 2;
    let _ = 2;
    console.log($ + _);

        //comentário
          //Letras maiúsculas importam. A variável "comer" e a "COMER" são variáveis diferentes.
        
        //comentário
          //Letras não latinas são permitidas, mas não recomendadas, pois há um consenso dos devs de escrever o nome de variáveis em inglês, por ser mais acessível a todos.
          let имя = '...';
          let 我 = '...';

        //comentário
          //Nomes Reservados
            //Há uma lista de nomes reservados e que não podem ser utilizados como nomes pois são usados pela linguagem em si.
            //Exemplos são: let, class, return e function estão reservadas.
            //Outras podem ser vistas em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

        //comentário
          //Uma atribuição sem o uso do modo estrito
            //Assunto abordado anteriormente. Determinar uma variável sem declará-la (let) é uma pratica ruim. Sempre declare-as com let antes de fazer alguma atribuição.

//Constantes
    //Para declarar uma variável constante (imutável), o que chamamos apenas de constante, use 'const' ao invés de 'let':
    const myBirthday = '19.11.2010';

    //Constantes não podem ser reatribuídas. Uma tentativa disso resultará em um erro.
    /*
    const myBirthday = '19.11.2010';
    myBirthday = '01.01.2001'; // error, can't reassign the constant! 
    */

    //Logo, uma constante guarda um valor fixo e invariável. Quando um programador tem a certeza que um valor determinado não mudará, ele declarará uma 'const'.

//Constantes com nomes em maiúsculo
    //Há uma prática difundida de utilizar constantes como alias (dar nome à variáveis, de modo a facilitar) para valores difíceis de lembrar que são conhecidos antes da execução. Um exemplo pode ser qualquer valor fixo que aparece várias vezes no seu código. Ao invés de digitar ele toda vez, faça uma constante que tenha ele atribuído.
    //Os nomes das constantes são geralmente todos em maiúsculo e as palavras são separadas por underlines / underscores (_).
    //Exemplo de constantes para cores em hexadecimal:
    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";

    // ...quando precisamos pegar uma cor
    let cor = COLOR_ORANGE;
    console.log(cor); // #FF7F00

    //Nomeá-las assim facilitam a compreensão semântica, além de ser mais fácil de lembrar e de escrever.

    //Quando utilizar maiúsculas ou minúsculas?
        //Valores de constantes que já são conhecidos antes mesmo da execução do script (chamados "hard-coded values") devem ser utilizadas sempre maiúsculas.
        //Valores de constantes que dependem do script rodar para ele ser determinado devem seguir o padrão de nome das variáveis normais. Exemplo:
        const pageLoadTime = someCode(); /* tempo levado até uma página carregar */
        //Isso depende de cada loading der página. Logo, não tem tempo determinado antes da execução.

//Nomeie as coisas corretamente
    //É de extrema importância saber nomear bem as variáveis. Esse ponto pode determinar um código de iniciante e de experiente.
    //Em projetos de verdade, a maioria do tempo gastado é modificando e extendendo uma base de código existente mais do que escrevendo algo do zero. Quando se volta para um código antigo, é muito mais fácil entender o que estava acontecendo com variáveis bem rotuladas, ou seja, com um nome bom.
    //Por isso, é uma etapa importante passar um tempo entendendo como nomear uma variável.
    //Algumas regras úteis para isso:
        // 1. Use palavras que existem: userName, shoppingCart;
        // 2. Não abrevie nomes com a primeira letra (a, b, c, d). Somente se souber o que está fazendo.
        // 3. Faça nomes descritivos, porém concisos. Exemplos como 'data' e 'value' são ruins, pois não dizem nada em si. Poderia ser 'projData' ou 'repoValue', com significado.
        // 4. Se um visitante de um site se chama 'user', por exemplo, variáveis relacionadas a ele devem conter 'user' também: currentUser, newUser.
    
        //comentário
          //Reusar ou criar?
            //Sempre crie novas variáveis para diferentes tipos. Não reutilize uma única variável achando que vai salvar tempo sem precisar declarar, pois irá perder dez vezes mais quando for depurar. 
            let box = 10; // box guarda um número 
            box = "texto"; // agora guarda uma string 
            box = [1, 2, 3]; // agora guarda um array 
            
            console.log(box); // O que tem dentro? Só olhando pra última linha sabemos

            let box1 = 10;
            let nome = "texto";
            let numero = [1, 2, 3];
            //Cada variável agora tem um propósito único.