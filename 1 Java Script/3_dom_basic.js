// DOM - Document Object Model {document: head, body, ...}
/*
document.head
document.body
document.getElementById('div')
document.getElementByTagName('div')

Exemple:

paragraphs = document.getElementByTagName('p')
console.log(paragraphs[1]);
console.log(paragraphs[1].innerText);

paragraphs[1].innerText = "New text on selected paragraph"

*/
//Event Listeners

canvas  = document.getElementById("mycanvas");
function f(){
	console.log("You clicked on the canvas");
}

canvas.addEventListener('click',f);


function f2(e){
	console.log("A key got pressed",e.key);
}

document.addEventListener('keydown',f2);