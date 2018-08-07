window.onload = function(){
	document.getElementById("shoppingBag").onclick = function(){
		let show1 = document.getElementById("hidden");
		let show2 = document.getElementById("login");
		if(getStyle(show1,"display")=="none" || getStyle(show2,"display")=="none"){
			show1.style.display="block";
			show2.style.display="block";
		}else{
			show1.style.display="none";
			show2.style.display="none";
		}
		loginPosition();
	}
}

function loginPosition(){
	let shoppingBagDom = document.getElementById("shoppingBag");
		let SBDomLeft = shoppingBagDom.offsetLeft;
		let SBDomTop = shoppingBagDom.offsetTop;
		let show1 = document.getElementById("hidden");
		let show2 = document.getElementById("login");
		show1.style.left=SBDomLeft+"px";
		show1.style.top=SBDomTop+27+"px";
		show2.style.left=SBDomLeft-144+"px";
		show2.style.top=SBDomTop+34+"px";
}
function getStyle(domObj,attr){
	//if(window.navigator.userAgent.indexOf("Trident")>-1){
	if(domObj.currStyle){//如果domObj有currentStyle属性。
		//domObj.currStyle.attr;//这是不行的，因为，这个找到attr属性，
		return domObj.currStyle[attr];//当对象的属性是变量时，用方括号。不能用点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}