/* FACTORY FUNCTION */
/* Função criando contador */
var createCounter = function (){
	var value = 0;
	return{
		add: function (){
			return ++value;
		}
	};
};
var counter = createCounter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());