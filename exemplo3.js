/* Expressão Regular */

var regExp = /^\(48\) 9999-9999$/; // Inclusão do escape, validando inicio e final
var telefone = "(48) 9999-9999";

console.log(regExp.test(telefone));