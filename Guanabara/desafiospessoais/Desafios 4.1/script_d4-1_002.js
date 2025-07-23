//Switch-case

/*
let dia = Number(prompt('Digite um número de 1 a 7.'))

switch(dia){
    case 1: 
        console.log('Domingo')
        break
    
    case 2: 
        console.log('Segunda')
        break
    
    case 3: 
        console.log('Terça')
        break

    case 4: 
        console.log('Quarta')
        break

    case 5: 
        console.log('Quinta')
        break

    case 6: 
        console.log('Sexta')
        break

    case 7: 
        console.log('Sábado')
        break

    default:
        console.log('Valor não está dentro do necessário.')
}
*/

let letra = prompt('Digite qualquer letra.').trim()

switch(letra.toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`A letra ${letra} é uma vogal`)
        break

    default:
        console.log(`A letra ${letra} é uma consoante.`)
}