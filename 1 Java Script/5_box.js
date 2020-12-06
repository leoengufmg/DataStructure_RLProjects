// canvas is used to draw graphics

/*
	Game Structure:
		init objects
		
		draw
		update
		
		Game Over
		
	Special Function:
		setInterval(gameloop,100);
*/


// things that may do only once
function init(){
	console.log("In Init");
	canvas = document.getElementById("mycanvas");
	W = canvas.width = 500;
	H = canvas.height = 500;
	// getContext is to make draw objects
	pen = canvas.getContext('2d')
	game_over =false;


	rect = {
		x:20,
		y:20,
		w:40,
		h:40,
		speed:50,
	}
}
function draw(){
	//console.log("In Draw");
	
	// Clear retangle after update its speed
	pen.clearRect(0,0,W,H);
	pen.fillStyle = "red";
	pen.fillRect(rect.x,rect.y,rect.w,rect.h);
	
}

// Control the speed of retangle and its orientation
function update(){
	//console.log("In Update");
	rect.x += rect.speed;
	if(rect.x>W-rect.w || rect.x <0){
		rect.speed *= -1;
	}
}

function gameloop(){
	if(game_over==true){
		clearInterval(f);
	}
	
	console.log("in gamelooop");
	draw();
	update();
}

init();
// Declare setInterval in order to be able to close later when the game is over
var f = setInterval(gameloop,100);











