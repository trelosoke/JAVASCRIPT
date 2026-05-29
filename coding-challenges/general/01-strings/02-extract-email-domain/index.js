/* 
### **extract-email-domain**

**Contexto real:** Você está processando e-mails de uma lista e precisa extrair apenas o domínio (a parte depois do `@`).

**Tarefa:** Crie uma função `extractDomain(email)` que, assumindo que o e‑mail tem exatamente um `@`, retorne a parte após o `@`.

**Pode usar:** `slice`, `indexOf`.
*/

function extractEmailDomain(email) {
    return email.slice(email.indexOf('@') + 1);
}

//**Testes:**
console.log(extractEmailDomain("teste@dominio.com")); // "dominio.com"
console.log(extractEmailDomain("usuario@gmail.com"));  // "gmail.com"
console.log(extractEmailDomain("nome@empresa.org"));   // "empresa.org"