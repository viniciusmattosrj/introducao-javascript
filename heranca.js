var homem ={
	sexo: "masculino"
};

var joao = {
	nome: "João",
<<<<<<< HEAD
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

for (var property in joao){
	//if(! joao.hasOwnProperty(property)) continue;
	console.log(property);
}
=======
	idade:20
};

var pedro = {
	nome: "Pedro",
	idade:18
};

console.log(joao);
console.log(pedro);
>>>>>>> e612abb17b1288fddf69af6077c2cb5c75c7135a
