var numSquare = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	//set mode
	setMode();
	//set squares 
	setSquare();
	reset();
}

function setMode(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].onclick = function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			if(this.textContent === 'Easy'){
				numSquare = 3;
			} else {
				numSquare = 6;
			}
			reset();
		}
	}
}

function setSquare(){
	for(var i = 0; i < squares.length; i++){
		squares[i].onclick = function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again';
			} else {
				this.style.backgroundColor = 'black';
				messageDisplay.textContent = 'Try Again';
			}
		}
	}
}

function reset(){
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'New Colors';
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
		
	}
}

resetButton.onclick = function(){
	reset();
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

