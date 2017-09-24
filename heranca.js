var homem ={
	sexo: "masculino"
};

var joao = {
	nome: "João",
	idade:20,
	__proto__: homem
};

var pedro = {
	nome: "Pedro",
	idade:18,
	__proto__: homem
};

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);
