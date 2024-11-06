// JavaScript Document

function changeColortitle(){
	debugger;
	if (document.getElementById("title").style.color=="green"){
		document.getElementById("title").style.color="yellow";
		} else {
		document.getElementById("title").style.color="green";
		}
	
}
function changeColor2(){
	document.getElementById("moo-deng").style.color="pink";
	document.getElementById("moo-deng").textContent = "hipo";
}
function changeColor3(){
	document.getElementById("pesto").style.color="orange";
	document.getElementById("pesto").textContent = "penguin";
}
function changeColor4(){
	document.getElementById("hua-hua").style.color="black";
	document.getElementById("hua-hua").textContent = "panda";
}
function changeColor5(){
	document.getElementById("harambe").style.color="gray";
	for(var i = 0;i<5;i++){
		document.getElementById("harambe").textContent += "	RIP harambe";
	}
}

