// 💬 String
let mensagem = "Olá, Treloso!";

// 🔢 Number
const idade = 25;
let pi = 3.14159;

// ✅ Boolean
let ativo = true;
let isAdmin = false;

// 🧺 Array
const frutas = ["maçã", "banana", "laranja"];

// 📦 Object
let usuario = {
    nome: "Treloso",
    idade: idade,
    online: ativo
};

// 🧙‍♂️ Function
function saudacao(nome) {
    return `Bem-vindo(a), ${nome}!`;
}

// ⛔ null e undefined
let vazio = null;
let naoDefinido;

// 💡 Operadores e controle de fluxo
if (ativo && idade > 18) {
    console.log(saudacao(usuario.nome));
} else {
    console.log("Acesso negado.");
}

// 🔁 Loop
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// 🗃️ Try...catch
try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) throw new Error("Divisão por zero!");
} catch (erro) {
    console.error("Erro encontrado:", erro.message);
}
