/* FUNCTION FACTORY - Revealing Module Pattern */
var counter = (function(){
	var _value = 0;
	var _add = function(){
		return ++_value;
	};
	var _reset = function(){
		_value = 0;
	};
	return{
		add: _add,
		reset: _reset
	};
})(); /* Auto invocação do método "boa prática" */
console.log(counter.value);

console.log(counter.add())

console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());