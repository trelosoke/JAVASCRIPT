'use strict';
/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

let userName = prompt('Login');

if(userName == 'Admin'){
    let pssword = prompt('Senha');
    if(pssword == 'TheMaster'){
        alert('Bem-vindo');
    } else if(pssword == '' || pssword == null){
        alert('Cancelado');
    } else if(pssword != 'TheMaster'){
        alert('Senha errada');
    }
} else if(userName == '' || userName == null){
    alert('Cancelado');
} else if(userName != 'Admin'){
    alert('Login não reconhecido.')
}