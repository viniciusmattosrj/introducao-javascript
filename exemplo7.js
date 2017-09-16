/* Expressão Regular - 7º Exemplo */
/* Flexibilizando os Quantificadores de Caracteres com Hífen  */
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/; // Inclusão do escape, validando inicio e final
var telefone1 = "(80) 98761234";
console.log(regExp.test(telefone1));

var telefone2 = "(80) 9876-1234";
console.log(regExp.test(telefone2));