'use strict';
//Arrow functions não têm "this"
    //Arrow functions são especiais: elas não têm seu próprio 'this'. Se referenciarmos 'this' a partir de tais funções, ele é retirado da função "normal" externa.
    //Por exemplo, aqui 'arrow()' usa 'this' do método externo 'user.sayHi':
    let user = {
        firstName: 'Ilya',
        sayHi() {
            let arrow = () => console.log(this.firstName); //aqui o 'this' só é 'user' porque a function declaration 'sayHi' definiu, não a arrow funcion.
            arrow();
        }
    };

    user.sayHi();

    //Caso que retorna erro
    let user2 = {
        nome: 'Treloso',
        mostrar: () => {
            console.log(this.nome);
        }
    };

    user2.mostrar(); //undefined. Arrow function não consegue associar this ao objeto. 
    
    //Isso é uma funcionalidade especial de arrow functions. É útil quando nós realmente não queremos ter um 'this' separado, mas sim obtê-lo do contexto externo. Posteriormente no capítilo "Arrow functions revisited" iremos nos aprofundar mais em arrow functions.