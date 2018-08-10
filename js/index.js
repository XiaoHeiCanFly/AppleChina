window.onload = function(){
	$(window).scroll(function(){
		leaderPosition();
	});
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
		$(window).resize(function(){
		  	loginPosition();
		});	
	}
	document.getElementById("serch").onclick = function(){
		serchInput();
	}
	
	document.getElementById("iPhoneX").onclick = function(){
		jump1();
	}
	document.getElementById("iPad").onclick = function(){
		jump2();
	}
	document.getElementById("macBookPro").onclick = function(){
		jump3();
	}
	document.getElementById("beats").onclick = function(){
		jump4();
	}
	document.getElementById("macBook").onclick = function(){
		jump5();
	}
	document.getElementById("iPhoneXhot").onclick = function(){
		jump6();
	}
	document.getElementById("iphone8").onclick = function(){
		jump7();
	}
	document.getElementById("changePlane").onclick = function(){
		jump8();
	}
	document.getElementById("watch").onclick = function(){
		jump9();
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

function serchInput(){
	document.getElementById("leaderPosition").style.backgroundColor = "#1f1f1f";
	document.getElementById("adDiv").style.display = "none";
	document.getElementById("serch").style.display = "none";
	document.getElementById("bigBox").style.display = "block";
	document.getElementById("serchInput").style.display = "block";
	// document.getElementById("serchInput").foucs();
	document.getElementById("serchBtn").style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	let outObj = document.getElementsByClassName("goOut");
	let fontSize = 14;
	setTimeout(function(){
		let myTimer = setInterval(function (){
			if(fontSize>0){
				fontSize-=1;
				for(var i=0;i<outObj.length;i++){
					let temp = outObj[i];
					temp.style.fontSize = fontSize+"px";
					temp.parentNode.style.display = "none";
				}
			}else if(fontSize<=0){
				clearInterval(myTimer);
				document.getElementById("keyWords").style.display = "block";
				document.getElementById("keyWords").style.left = document.getElementById("serchBtn").offsetLeft+"px";
			}
		},30);
	},50);
	// for(var i=0;i<outObj.length;i++){
	// 	let temp = outObj[i];
	// 	temp.animate({ 
	//     	fontSize:"0px"
 //    	}, 1000 );
	// }
	
	// setTimeout(function{

	// },1000);
}

function leaderPosition(){
	let leaderDom = document.getElementById("leaderPosition");
	if($("html").scrollTop>=40){
		leaderDom.style.position = "fixed";
		leaderDom.style.top = 0+"px";
	}
}

function jump1(){
	window.location.href="#" ;

}
function jump2(){
	window.location.href="#" ;

}
function jump3(){
	window.location.href="#" ;

}
function jump4(){
	window.location.href="#" ;

}
function jump5(){
	window.location.href="#" ;

}
function jump6(){
	window.location.href="#" ;

}
function jump7(){
	window.location.href="#" ;

}
function jump8(){
	window.location.href="#" ;

}
function jump9(){
	window.location.href="#" ;

}


//获取某个DOM对象的某个样式属性
//参数：DOM对象，属性名
//返回值：属性值

function getStyle(domObj,attr){
	//if(window.navigator.userAgent.indexOf("Trident")>-1){
	if(domObj.currStyle){//如果domObj有currentStyle属性。
		//domObj.currStyle.attr;//这是不行的，因为，这个找到attr属性，
		return domObj.currStyle[attr];//当对象的属性是变量时，用方括号。不能用点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}
// function getStyle(oElm, strCssRule){
//     var strValue = "";
//     if(document.defaultView && document.defaultView.getComputedStyle){
//         strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
//     }
//     else if(oElm.currentStyle){
//         strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
//             return p1.toUpperCase();
//         });
//         strValue = oElm.currentStyle[strCssRule];
//     }
//     return strValue;
// }