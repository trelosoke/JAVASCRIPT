'use script';
//Pergunte a idade e classifique como criança (<12), adolescente (12–17), adulto (18–59), idoso (60+).

let idade = +prompt("Qual a sua idade?");

if (idade < 12) { 
    alert("Você é criança"); 
} else if (idade >= 12 && idade < 18) { 
    alert("Você é adolescente"); 
} else if (idade >= 18 && idade < 60) { 
    alert("Você é adulto"); 
} else if (idade >= 60) { 
    alert("Você é idoso"); 
} else {
    alert("Insira um número válido"); 
}