var counter = {
	value: 0,
	add: function(){
		return ++this.value;
	}
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
	value: [],
	add: function (item){
		this.value.push(item);
		return this.value;
	}	
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());