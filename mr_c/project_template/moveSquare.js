//define a function (what is that?) named moveSquare that takes in one parameter (what is that?) called direction
	var domHTMLenv="square_env"; //The name here corresponds to the id of the div element that holds the square
	var domHTMLdivID="square"; //Ths is the id of our square
	var speed = 5; //Try editng this number and see what happens!

function moveSquareLeft()
{
	
	var env = document.getElementById(domHTMLenv); //Here we store a DOM element (HTML) by referencing the id
	var env_rec = env.getBoundingClientRect(); //Here we call the DOM element and ask for the positions of it's corners
	//Same for the square as above, we will be editing the position of the square to make it look like it's moving around.
	var square = document.getElementById(domHTMLdivID); 
	var square_rec = square.getBoundingClientRect(); 
    square.style.position = "absolute";
	
	if (check_left(env_rec, square_rec)){
		square.style.left = parseInt(square_rec.left - speed)+'px';
	}
}

function moveSquareUp()
{
	var env = document.getElementById(domHTMLenv); //Here we store a DOM element (HTML) by referencing the id
	var env_rec = env.getBoundingClientRect(); //Here we call the DOM element and ask for the positions of it's corners
	//Same for the square as above, we will be editing the position of the square to make it look like it's moving around.
	var square = document.getElementById(domHTMLdivID); 
	var square_rec = square.getBoundingClientRect(); 
    square.style.position = "absolute";
	if (check_up(env_rec, square_rec)){
		square.style.top = parseInt(square_rec.top - speed)+'px';
	}
}

function moveSquareDown()
{
	var env = document.getElementById(domHTMLenv); //Here we store a DOM element (HTML) by referencing the id
	var env_rec = env.getBoundingClientRect(); //Here we call the DOM element and ask for the positions of it's corners
	//Same for the square as above, we will be editing the position of the square to make it look like it's moving around.
	var square = document.getElementById(domHTMLdivID); 
	var square_rec = square.getBoundingClientRect(); 
    square.style.position = "absolute";
	if (check_down(env_rec, square_rec)){
		square.style.top = parseInt(square_rec.top + speed)+'px';
	}
}

function moveSquareRight()
{
	var env = document.getElementById(domHTMLenv); //Here we store a DOM element (HTML) by referencing the id
	var env_rec = env.getBoundingClientRect(); //Here we call the DOM element and ask for the positions of it's corners
	//Same for the square as above, we will be editing the position of the square to make it look like it's moving around.
	var square = document.getElementById(domHTMLdivID); 
	var square_rec = square.getBoundingClientRect(); 
    square.style.position = "absolute";
	if (check_right(env_rec, square_rec)){
		square.style.left = parseInt(square_rec.left + speed)+'px';
	}
}

function moveSquareUpRight()
{
	
}

function moveSquareUpLeft()
{

}

function moveSquareDownRight()
{

}

function moveSquareDownLeft()
{

}




















function check_left(env_rec, square_rec){
	if (square_rec.left > (env_rec.left + speed)){
		return true;
	}
	return false;
}

function check_up(env_rec, square_rec){
		if (square_rec.top > (env_rec.top + speed)){
		return true;
	}
	return false;
}

function check_down(env_rec, square_rec){
		if (square_rec.bottom < (env_rec.bottom + speed)){
		return true;
	}
	return false;
}

function check_right(env_rec, square_rec){
		if (square_rec.right < (env_rec.right + speed)){
		return true;
	}
	return false;
}

