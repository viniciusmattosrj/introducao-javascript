
var Pessoa = function (nome, idade){
	this.nome = nome;
	this.idade = idade;
};

var pedro = new Pessoa("Pedro", 20);
console.log(pedro);
console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);
console.log("nome" in pedro);
console.log("peso" in pedro);

delete pedro.nome;
console.log("nome" in pedro);