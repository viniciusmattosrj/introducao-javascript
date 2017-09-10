/* Function com Apply e passando mais parametros */
var getIdade = function(extra){
  console.log(arguments);
  return this.idade + extra;
}

var pessoa = {
  nome:"João",
  idade:20,
  getIdade: getIdade
};

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2, 1, 3));
console.log(getIdade.apply(pessoa,[2, 1, 3]));
