'use strict';
// function showMessage(from, text = 'arroz'){ //Valor default
//     from = '*' + from + '*';
//     console.log(from + ': ' + text);
// }

// showMessage('Ann');

function showMessage(from, text) { //(*)
  if (text === undefined) { //Utilizado em códigos mais antigos para 
    text = 'no text given'; //determinar valores default.
  }

  alert( from + ": " + text );
}

function showMessage2(from, text) { //Tanto essa,0 quanto a função (*) podem
                                    //utilizar essas formas depois de algum código dentro do compo da função

    text = text || 'default'; //ou ??
}

