var homem ={
	sexo: "masculino"
};

var joao = {
	nome: "João",
	idade:20,
	sexo: "feminino"
};

delete joao.sexo;

Object.setPrototypeOf(joao, homem);


console.log(joao);
console.log(joao.sexo);
