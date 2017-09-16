/* Expressão Regular - 4º Exemplo */
/* Grupos de Caracteres */
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; // Inclusão do escape, validando inicio e final
var telefone = "(80) 9876-1234";

console.log(regExp.test(telefone));