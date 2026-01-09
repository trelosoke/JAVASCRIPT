//Semicolons (pontos e vírgulas - ;)
    //Podem ser omitidos na maioria das vezes apenas por quebrar a linha:
    alert('Hello')
    alert('World')
    //Aqui, o JS interpreta a quebra de linha como um ; implicito. Isso é chamado de "automatic semicolon insertion".

    //Há casos em que a quebra de linha não representa semicolon:
    alert(3 +
    1
    + 2); //Retorna 6

    //O JS também pode não interpretar muito bem a quebra de linha como semicolon:
    alert("Hello");
    [1, 2].forEach(alert);
        //Sem o semicolon no primeiro alert:
        alert("Hello")
        [1, 2].forEach(alert);

        //O JS interpreta como um código só, ao invés de 2 separados:
        alert("Hello")[1, 2].forEach(alert);
    
    //Consideração final
        //Sempre utilize semicolons (;) depois das declarações, independente se em algumas, somente a quebra de linha basta. É mais seguro para não conflitar com outras declarações.