/* Expressão Regular - 8º Exemplo */
/* 
	Flexibilizando os Quantificadores de Caracteres com Hífen  
	e repetindo pelo menos 1x
*/
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/; // Inclusão do escape, validando inicio e final
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));