//document.getElementBy...
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}


//获取某个DOM对象的某个样式属性
//参数：DOM对象，属性名
//返回值：属性值

function getStyle(domObj,attr){
	//if(window.navigator.userAgent.indexOf("Trident")>-1){
	if(domObj.currentStyle){//如果domObj有currentStyle属性。
		//domObj.currStyle.attr;//这是不行的，因为，这个找到attr属性，
		return domObj.currentStyle[attr];//当对象的属性是变量时，用方括号。不能用点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}

//阻止事件的默认行为
//参数：event对象
//返回值：无

function preventDefault(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue = false;
	}
}

//功能：绑定事件的函数
//参数：
//  DOM对象:domObj
//  事件类型:type (不含on)
//  函数（事件对应的函数）
//  是否冒泡
//返回值：无

function addEvent1803(domObj,type,func,isBuHuo){
	if(domObj.addEventListener){//其它主流浏览器，DOM2级
		domObj.addEventListener(type,func,isBuHuo);		
	}else if(domObj.attachEvent){//是IE浏览器，IE级
		domObj.attachEvent("on"+type,func);
	}else{//DOM0级
		domObj["on"+type] = func;
	}
}


//功能：阻止事件冒泡
//参数：
//  事件对象
//返回值：无

function stopPropagation1803(evt){
	if(evt.stopPropagation){
		evt.stopPropagation();
	}else{
		evt.cancelBubble = true;
	}
}

//让物体移动
//参数：
//移动的物体（DOM元素）
//样式属性名；
//方向（1：表示正向，由小到大；-1：表示反向，由大到小）
//起始位置
//结束位置
//步长
//频率（时间间隔）

function move1803(domObj,attr,direction,startP,endP,inc,timeSpace){
	let currPos = startP;	
	let myTimer = setInterval(function(){
		//1、改变数据
		currPos=currPos+direction*inc;
		//2、边界处理
		if(direction>0){
			if(currPos>=endP){
				window.clearInterval(myTimer);	
				currPos = endP;
			}	
		}else{
			if(currPos<=endP){
				window.clearInterval(myTimer);
				currPos = endP;
			}
		}		
		//3、外观呈现
		domObj.style[attr] = currPos+"px";
	},timeSpace);	
}


//让物体移动02
//参数：
//移动的物体（DOM元素）
//样式属性名；
//结束位置
//步长
//频率（时间间隔）

function move1803_02(domObj,attr,endP,inc,timeSpace){
	let startP=parseInt(getStyle(domObj,attr));
	let direction = endP>startP?1:-1;
	move1803(domObj,attr,direction,startP,endP,inc,timeSpace);
}


//淡入淡出的封装
//参数：
//移动的物体（DOM元素）
//结束值
//步长
//频率（时间间隔）

function fadeInOut(domObj,endValue,inc,timeSpace){
	let startValue = parseInt(getStyle(domObj,"opacity"));
	let direction = endValue>startValue?1:-1;
	let currPos = startValue;	
	let myTimer = setInterval(function(){
		//1、改变数据
		currPos=currPos+direction*inc;
		//2、边界处理
		if(direction>0?currPos>=endValue:currPos<=endValue){
			window.clearInterval(myTimer);
			currPos = endValue;
		}
		//3、外观呈现
		domObj.style.opacity = currPos;
	},timeSpace);
}


//淡入
function fadeIn(domObj,inc,timeSpace){
	fadeInOut(domObj,1,inc,timeSpace);
}


//淡出
function fadeOut(domObj,inc,timeSpace){
	fadeInOut(domObj,0,inc,timeSpace);
}


//多属性运动的封装（用多长时间，把哪个物体从当前位置移动到哪儿）
//参数：
//移动的物体（DOM元素）
//多个属性的最终值：样式属性名和结束位置（json对象）
//   如：{
//			left:500,
//			top:400
//}
//时长；

function move(domObj,endAttrs,timeLong){
	var currAttrs={};//记录着每个属性的当前值；
	for(let key in endAttrs){//给currAttrs里赋初值为domObj的起始位置
		currAttrs[key]= parseInt(getStyle(domObj,key));
	}
	
	//计算方向（多个），
	var directions = {};
	for(let key in endAttrs){
		directions[key]= endAttrs[key]>currAttrs[key]?1:-1;
	}
	//假定总步数是100步；
	//确定总步数（100），再根据总距离，计算步长；
	//计算步长（多个）
	var incs = {};
	for(let key in endAttrs){
		incs[key]= Math.abs(endAttrs[key]-currAttrs[key])/100;
	}
	//时间间隔（一样的，因为总时长一样，总步数也一样），、
	let timeSpace = timeLong/100;
	
	let myTimer = setInterval(function(){
		//1、改变数据
		let firstKey;//记录第一个键名（属性名）
		for(let key in endAttrs){
			if(!firstKey){
				firstKey = key;	
			}
			currAttrs[key] = currAttrs[key]+directions[key]*incs[key];
		}
		
		//2、边界处理
		if(directions[firstKey]>0){//正向
			if(currAttrs[firstKey]>=endAttrs[firstKey]){
				window.clearInterval(myTimer);	
				for(let key in endAttrs){
					currAttrs[key] = endAttrs[key];
				}
			}	
		}else{//反向
			if(currAttrs[firstKey]<=endAttrs[firstKey]){
				window.clearInterval(myTimer);	
				for(let key in endAttrs){
					currAttrs[key] = endAttrs[key];
				}
			}
		}		
		//3、外观呈现
		for(let key in currAttrs){
			domObj.style[key] = currAttrs[key]+"px";
		}
	},timeSpace);	

}