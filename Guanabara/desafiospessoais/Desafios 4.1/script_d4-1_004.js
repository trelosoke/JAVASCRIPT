//Escreva um programa que pede ao usuário para inserir dois números. Multiplique esses números e exiba o resultado. Continue perguntando por novos números e multiplicando-os até que o usuário insira zero em qualquer um dos campos. 
let n1, n2 

do{

n1 = Number(prompt('Digite qualquer número.'))
n2 = Number(prompt('Digite qualquer números e quando quiser, digite 0.'))
    if(n1 !== 0 && n2 !== 0){
        let mult = n1 * n2
        alert(`Resultado: ${mult}`)
    }

}while(n1 != 0 && n2 !=0)