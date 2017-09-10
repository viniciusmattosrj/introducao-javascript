/* Funções Construtoras vs. Funções Fábrica */
//Funções Fábrica:

var criarPessoa = function (nome, idade){
  return{
    nome: nome,
    idade: idade
  };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 30));


//Funções Construtoras:
var Pessoa = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
