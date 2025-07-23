function mostrarMens(){
    console.log('skiajujdka~');
};

mostrarMens();

let userName = 'Lucas'; //Chamada "variável global". Está fora da função, mas pode ser utilizada nela.

function showMens(){
    let userName = 'Douglas'; //Mesma variável foi declarada novamente. Porém, como está dentro de function, a função utilizará a variável localizada internamente dela.
    console.log(userName);
};

showMens();

