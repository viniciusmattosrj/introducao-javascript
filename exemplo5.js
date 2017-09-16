/* Expressão Regular - 5º Exemplo */
/* Quantificadores de Caracteres */
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/; // Inclusão do escape, validando inicio e final
var telefone = "(80) 9876-1234";

console.log(regExp.test(telefone));