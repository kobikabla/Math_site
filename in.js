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
			this.getElementById("score").innerHTML=score
		}
		else{
			document.getElementById("answer").value = '';
		}

		
}})
}

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
		console.log("life=" + life)
		if (life==0){
			cancelAnimationFrame(animationid);
			console.log("you dead")
			start_div.style.display ='flex'
		}
		else{
			init()
		}}
		listen()

	
	
}

function stop(){
	cancelAnimationFrame(animationid);
	start_div.style.display ='inline'
}


function init(){
	y =20
	fast =2
	targil =targilto()
	move();

}
function start_game(){
	y =20
	fast =0.5
	targil =targilto()
	life = 3
	score =0
	start_div.style.display ='none'
	move()
}

init()