var getIdade = function(){
  return this.idade;
}

var pessoa = {
  nome:"João",
  idade:20,
  getIdade: getIdade
};

console.log(pessoa.getIdade());
console.log(getIdade.call(pessoa));
