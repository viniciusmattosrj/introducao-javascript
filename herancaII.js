/* Exemplo II da função new */
var _new = function (f){
  var obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
};

var Homem = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
};

Homem.prototype.sexo = "masculino";

var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);

var pedro = _new(Homem, "Pedro", 18);

console.log(pedro);
console.log(pedro.sexo);
