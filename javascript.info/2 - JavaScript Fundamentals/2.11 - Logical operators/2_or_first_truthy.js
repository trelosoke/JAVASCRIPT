'use strict';
//OR "||" encontra o primeiro valor "truthy"
    //Agora vamos trazer as funcionalidades "extras" do JavaScript.
    //Dados multiplos ORs:
    let value1 = 0, 
        value2 = '', 
        value3 = 1;
        
    let result = value1 || value2 || value3;
    //... o operador ó faz o seguinte:
        // 1. Avalia os operandos da esqueda para a direita;
        // 2. Para cada operando, converte para boolean. Caso o resultado seja "true", interrompe-se e retorna o valor original daquele operando;
        // 3. Se todos os operandos tiverem sido avaliados (p.ex. todos foram "false"), retorna o último operando.
    
    //Um valor é retornado em sua forma original, sem conversão.

    //Em outras palavras, uma cadeia de OR (||) retorna o primeiro valor "truthy" ou o último se nenhum "truthy" foi encontrado. Por exemplo:
    console.log(1 || 0); //1 (1 é truthy);

    console.log(null || 1); //1 (1 é o primeiro valor truthy);
    console.log(null || 0 || 1); //1 (primeiro valor truthy);

    console.log(undefined || null || 0); //0 (todos "falsy", logo, retorna o último).
    //Isso leva a alguns usos interessantes comparados ao "puro, clássico, 'boolean-only' OR".

    // 1. Obtendo o primeiro valor "truthy" de uma lista de variáveis ou expressões.
        let nomePrimero = ''; //false
        let nomeUltimo = ''; //false
        let nickName = 'SuperCoder'; //true - primeiro valor true. Logo, é retornado.

        console.log(nomePrimero || nomeUltimo || nickName || "Anonymous"); //Caso todas as variáveis fossem false, "Anonymous" seria mostrado.

    // 2. Avaliação em curto-circuito (short-circuit).
        //Significa que OR "||" processa seus argumentos antes do primeiro valor truthy ser alcançado, e então o valor é retornado imediatamente, sem nem avaliar o outro argumento.

        //A importância dessa funcionalidade se torna óbvia se um operando não é apenas um valor, mas uma expressão com um efeito colateral, tais como uma atribuição de variável ou uma chamada de função.
        //No exemplo abaixo, apenas a segunda mensagem é mostrada:

        true || console.log('Omitido');
        false || console.log('Mostrado');

        //Às vezes usa-se essa funcionalidade para executar comandos apenas se a condição na parte esquerda for falsa.