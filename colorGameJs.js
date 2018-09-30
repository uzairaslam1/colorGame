var sqReq=6;
var colors=[];
var pickedColor;
var reset=document.getElementById("reset");
var squares=document.querySelectorAll(".Squares");
var mode=document.getElementsByClassName("mode");
var blank=document.querySelector("#blank");
var header=document.getElementById("header");
var h1Color=document.getElementById("colorCode");
var time=document.getElementById("last");
mode[1].classList.add("selected");


init();


function init(){
	setUpMode();
	setUpSquares();
	rest();
}


function setUpMode(){
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click",function(){
		 	mode[0].classList.remove("selected");
		 	mode[1].classList.remove("selected");
		 	this.classList.add("selected");
		 	this.textContent==="easy"?sqReq=3:sqReq=6;
		 	rest();
		});
	}
}


function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function(){
			if (this.style.backgroundColor===pickedColor) {
				blank.textContent="correct";
				reset.textContent="play Again?"
				header.style.backgroundColor=pickedColor;
				for (var i = 0; i <squares.length; i++) {
					squares[i].style.backgroundColor=pickedColor;
				}
			}
			else{
				blank.textContent="try again";
				this.style.backgroundColor="#232323";
			}
		});
	}
}


function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	var arr=[];
	for (var i = 0; i <num; i++) {
			//red 0-255
			var red=Math.floor(Math.random() * 256);
			//green 0-255
			var green=Math.floor(Math.random() * 256);
			//blue 0-255			
			var blue=Math.floor(Math.random() * 256);
		
			arr[i]="rgb(" +red+ ", "+green+ ", "+blue+ ")"
		}	
		return arr;
}


function rest(){
			colors=generateRandomColors(sqReq);
			pickedColor=pickColor();

			for (var i = 0; i <squares.length; i++) {
				if (colors[i]) {
					squares[i].style.backgroundColor=colors[i];
					squares[i].style.display="block";
				}
				else{
					squares[i].style.display="none";	
				}
			}
			h1Color.textContent=pickedColor;
			blank.textContent="";
			reset.textContent="new color"
			header.style.backgroundColor="maroon";
	
}


reset.addEventListener("click", function(){
	rest();
});


var firstsI =setInterval(function(){
	time.innerHTML=Date().slice(0,25);
},1000);