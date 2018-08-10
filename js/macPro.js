var count;
let left1 = 0;
window.onload = function(){
	let goPs = document.getElementsByClassName("goP");
	count=0;
	for(let i = 1;i<goPs.length;i++){
		let temp = goPs[i];
		temp.onclick = function(){
			count++;
			banner();			
		}
	}
}

function banner(){
	let width1 = document.documentElement.clientWidth;
	var goPs = document.getElementsByClassName("goP");
	let left2 = 0;
	setInterval(function(){

		document.getElementById("video1").
	},1000);
//	let p = document.createElement("p");
//	p.innerHTML = "程序员";
	// document.getElementById("video1").style.transform = "translateX(-"+width1+"px)";
	// document.getElementById("video1").style.transitionDuration = 1+"s";
	// document.getElementById("video2").style.transform = "translateX(-"+width1+"px)";
	// document.getElementById("video2").style.transitionDuration = 1+"s";
	setTimeout(function(){
//		for(var i = 0;i<goPs.length;i++){
//			goPs[i].style.transform = "translateX(-"+510+"px)";
//			goPs[i].style.transitionDuration = 1+"s";
//		}
		let myTimer = setInterval(function(){
			left1 = left1-10;
			document.getElementById("goBtns").style.left = left1+"px";
			if(left1%510==0){
				clearInterval(myTimer);
			}
		},5);
		
//		document.getElementById("goBtns").style.transitionDuration = 1+"s";
	},300);
	goPs[count-1].style.opacity = 0;
	goPs[count-1].style.transitionDuration = 1+"s";
	goPs[count].style.opacity = 1;
	goPs[count].style.transitionDuration = 1+"s";
//	goPs[0].parentNode.appendChild(p);
//	goPs[0].parentNode.removeChild(goPs[0]);
}

