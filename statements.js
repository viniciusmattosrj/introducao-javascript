/* for, if, else, continue, while, switch, break, throw, try e catch */

var text = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.";

var hackerTextError = function (message){
	this.message = message;
	this.name = "HackTextError";
};

var toHackerCase = function(text) {
	if(!text) throw new HackerTextError ("Invalid text.");
	var hackerTextArray = [];
	var i = 0;
	while (i < text.length){
		switch(text.charAt(i)){
			case "o":
				hackerTextArray.push(0);
				break;
			case "l":
				hackerTextArray.push(1);
				break;
			case "e":
				hackerTextArray.push(3);
				break;
			case "a":
				hackerTextArray.push(4);
				break;
			case "s":
				hackerTextArray.push(5);
				break;
			case "t":
				hackerTextArray.push(6);
				break;
			default:
				hackerTextArray.push(text.charAt(i));
		}
		i++;
	}
	return hackerTextArray.join("");
};
try{
	console.log(toHackerCase());	
} catch (e){
	console.log("Error: " + e.message);	
}
console.log(toHackerCase(text));
