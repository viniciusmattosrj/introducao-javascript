/* for, if, else, continue, while, switch, break, throw, try e catch */

var text = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.";

var toHackerCase = function (text){
	var hackerTextArray = [];
	for (var i = 0;i < text.length; i++){
		
		if (text.charAt(i) === "o"){
			hackerTextArray.push(0);
		}else{
			hackerTextArray.push(text.charAt(i));
		}
	}
	// Esse Join foi utilizado para converter o Array em String
	return hackerTextArray.join(",");
};
console.log(toHackerCase(text));