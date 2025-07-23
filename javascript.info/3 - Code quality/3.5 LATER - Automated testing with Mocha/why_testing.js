'use strict';
//Algumas vezes necessitamos testar o código sem ser só por reexecutá-lo. 
//Isso porque são muitos testes e muitas vezes algo pode ser arrumado, 
//mas outra coisa que funcionava antes agora não funciona mais. 
//Fazer todas essas mudanças manualmente pode ser um quebra-cabeça interminável.
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});