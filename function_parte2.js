/* FUNCTION FACTORY II */
var Counter = function(){
	var value = 0;
	this.add = function (){
		return ++value;
	};
};
var counter = new Counter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
