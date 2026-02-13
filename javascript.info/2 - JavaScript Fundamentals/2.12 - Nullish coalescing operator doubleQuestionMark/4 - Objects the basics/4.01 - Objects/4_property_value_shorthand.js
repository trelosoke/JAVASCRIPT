'use strict';
//"Shorthand" do valor da propriedade (property value shorthand)
    //Na programação real, frequentemente usamos variáveis existentes como valores para nomes de propriedades:
    function makeUser (name, age) {
        return {
            name: name,
            age: age,
            //...outras propriedades
        };
    }

    let user = makeUser("John", 30);
    console.log(user.name);

    //No exemplo acima, propriedades têm os mesmos nomes que as variáveis. O caso de uso de fazer uma propriedade a partir de uma variável é tão comum, que existe uma "abreviação (shorthand)" do valor da propriedade para fazê-la menor.

    //Ao invés de 'nome: nome', podemos apenas escrever 'nome', assim:
    function createUser(name, age) {
        return {
            name, //o mesmo que name: name
            age, //o mesmo que age: age
            //...
        }
    }

    //Podemos usar ambas abreviações ou propriedades normais no mesmo objeto:
    let user2 = {
        nome,
        age: 30,
    };