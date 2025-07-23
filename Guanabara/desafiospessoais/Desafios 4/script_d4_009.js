
for (let n = 2; n <= 10; n++) {
  let isPrime = true;  // Inicialmente, assume que 'n' é primo
  
  // Esse loop vai testar todos os números que podem dividir 'n'
  for (let divisor = 2; divisor <= n; divisor++) {
    if (n % divisor === 0) {  // Se encontrar um divisor que funciona
      isPrime = false;        // 'n' não é primo
      break;                  // Para de testar o resto dos divisores
    }
  }
  
  // Se após testar todos os divisores, 'isPrime' continua verdadeiro:
  if (isPrime) {
    console.log(n);           // Mostra o número, pois ele é primo
  }
}