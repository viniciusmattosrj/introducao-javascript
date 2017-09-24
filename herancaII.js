var Homem = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.sexo = "masculino";
};

var joao = new Homem("João",20);
console.log(joao);

/* Exemplo com call() */
/*
var pedro = {};
Homem.call(pedro, "Pedro", 18);
console.log(pedro);
*/

/* Exemplo com apply() */
var pedro = {};
Homem.apply(pedro, ["Pedro", 18]);
console.log(pedro);
