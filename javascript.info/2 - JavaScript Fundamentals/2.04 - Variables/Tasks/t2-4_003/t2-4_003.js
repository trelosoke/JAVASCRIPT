//Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
//Here we have a constant birthday for the date, and also the age constant.

//The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

//Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?

//Explain below:
// A constante 'BIRTHDAY' deve ser utilizada assim como está pois é uma valor já conhecido antes da execução. Então, facilita de lembrar desse valor. Já 'AGE' deve ser utilizado como as variáveis normalmente são nomeadas, já que seu valor só é conhecido após o código rodar. Nesse caso, deveria ser escrito 'age', tudo minúsculo.