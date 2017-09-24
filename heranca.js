var homem ={
	sexo: "masculino"
};

var joao = {
	nome: "João",
	idade:20,
	sexo: "feminino"
};

/*
	Mesmo tendo a propriedade explicita acima,
	por utilizar o delete eu apaguei e forcei o
	objeto a buscar no outro prototipo
*/
delete joao.sexo;

Object.setPrototypeOf(joao, homem);

console.log(joao);
console.log(joao.sexo);
