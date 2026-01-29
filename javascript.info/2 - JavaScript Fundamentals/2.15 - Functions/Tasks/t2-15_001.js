// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?

// Não. Caso a condição do 'if' fosse falsa, ele já pularia a execução e passaria o controle para a proxima linha de comando.