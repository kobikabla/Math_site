const canvas = document.querySelector('canvas');

canvas.width= 300;
canvas.height = 500;

const c =canvas.getContext('2d');
let y =20;
let fast =0.5;
let new_targil = 0;
let targil = {};
let animationid ;
let life = 3;
let score =0;
const start_div = document.getElementById('startdiv');
const corEl = document.getElementById('corEl');
const imeg =document.getElementsByClassName("imeg")
let count = 0

//build atargil obj 
function targilto(){
	to = 0
	while (to !=1){
var targil = {
	x :(Math.floor(Math.random() * 10)),
	y :(Math.floor(Math.random() * 10)),
		}
	targil['sum']=targil.x+targil.y
	if (targil.sum <10){
		to =1
	}
	}
	return (targil)
}



//check if answr is rihgt
function listen (){
	document.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
		if (document.getElementById("answer").value == targil.sum){
			document.getElementById("answer").value = '';
			console.log("good job");
			targil=targilto();
			y=20;
			score +=10
			count +=1
			this.getElementById("score").innerHTML="score:"+score
		}
		else{
			document.getElementById("answer").value = '';
		}

		
}})
}
//functio check the ans presing the buutton
function button_check(){
		if (document.getElementById("answer").value == targil.sum){
			document.getElementById("answer").value = '';
			console.log("good job");
			targil=targilto();
			y=20;
		}
		else{
			document.getElementById("answer").value = ''
			console.log("shit")
		}
}

//canvas anmation
function move(){
	c.clearRect(0,0,300,500)
    c.font="30px Comic Sans MS";
    c.fillStyle = "red";
    c.textAlign = "center";
	c.fillText(targil.x+"+"+targil.y , canvas.width/2, y);
	y+=fast
	animationid =requestAnimationFrame(move);
	//if end screen and no answre
	if (y==500){
		c.clearRect(0,0,300,500)
		y=200
		c.fillText(targil.x+"+"+targil.y+"="+targil.sum , canvas.width/2, y);
		cancelAnimationFrame(animationid);
		life-=1
		harte()
		console.log("life=" + life)
		//if dead stop animation and show score 
		if (life==0){
			console.log("you dead")
			stop();
			
		}
		else{
			init()
		}}
		listen()

	
	
}



function harte(){
		console.log(imeg[life]);
		imeg[life].src= "img/hartblack.png";


}





//stop button stop anmation 
function stop(){
	cancelAnimationFrame(animationid);
	start_div.style.display ='inline';
	corEl.innerHTML="your score:"+score;

}


function init(){
	y =20
	fast =1
	targil =targilto()
	move();

}
//start the game reseting scor and life
function start_game(){
	y =20
	fast =1
	targil =targilto()
	life = 3
	score =0
	start_div.style.display ='none'
	for (i = 0; i < imeg.length; i++){
		imeg[i].src= "img/hartred.png"
	}
	move()
}
