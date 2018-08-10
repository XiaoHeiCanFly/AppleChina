window.onload = function(){
	document.getElementById("passwordInput").onclick = function(){
		let show1 = document.getElementById("hidden");
		let show2 = document.getElementById("remind");
		if(getStyle(show1,"display")=="none" || getStyle(show2,"display")=="none"){
			show1.style.display="block";
			show2.style.display="block";
		}else{
			show1.style.display="none";
			show2.style.display="none";
		}
		loginPosition();
		$(window).resize(function(){
		  	remindPosition();
	});	
}

function remindPosition(){
	let passwordInputDom = document.getElementById("passwordInput");
	let SBDomLeft = passwordInputDom.offsetLeft;
	let SBDomTop = passwordInputDom.offsetTop;
	let show1 = document.getElementById("hidden");
	let show2 = document.getElementById("remind");
	show1.style.left=SBDomLeft+"px";
	show1.style.top=SBDomTop+27+"px";
	show2.style.left=SBDomLeft-144+"px";
	show2.style.top=SBDomTop+34+"px";
}