document.title = "Cast off the shackles of HTML";
document.body.style.width = "25000px";

//Creates a hyperlink to a given site
var linkSite = function(url, linkText) {
	var aObj = document.createElement("a");
	aObj.href = url;
	aObj.textContent = linkText;
	return aObj;
}

//A simple function to create text content for a node
var nContent = function(n, nType, nValue) {
	return "" + nType + "(" + n + ") = " + nValue;
}

//Takes a functor and creates a tree with which to display that functor's output
var display = function(n, funct, node) {
	var tree = funct(n);
	node.appendChild(tree.div);
	node.setAttribute("class", "tree");
}

//The function for generating a graphical display of Fibonacci numbers. May be used as a functor
var fib = function fibonacci(n) {
	var value;
	var div = document.createElement("div");
	div.setAttribute("class", "node");
	
	if(n < 2) {
		value = n;
		var p = document.createElement("p");
		p.textContent = nContent(n, "fib", value);
		div.appendChild(p);
	}
	else {
		var left = fibonacci(n - 1);
		var clas = left.div.getAttribute("class");
		left.div.setAttribute("class", clas + " node-left");
		
		var right = fibonacci(n - 2);
		clas = right.div.getAttribute("class");
		right.div.setAttribute("class", clas + " node-right");
		
		value = left.value + right.value;
		var p = document.createElement("p");
		p.textContent = nContent(n, "fib", value);
		div.appendChild(p);
		
		div.appendChild(left.div);
		div.appendChild(right.div);
	}
	
	return{"value" : value, "div" : div};
}

//The function for generating a graphical display of Pell numbers. May be used as a functor
var pell = function pellNum(n) {
	var value;
	var div = document.createElement("div");
	div.setAttribute("class", "node");
	
	if(n < 2) {
		value = n;
		var p = document.createElement("p");
		p.textContent = nContent(n, "pell", value);
		div.appendChild(p);
	}
	else {
		var left = pellNum(n - 1);
		var clas = left.div.getAttribute("class");
		left.div.setAttribute("class", clas + " node-left");
		
		var right = pellNum(n - 2);
		clas = right.div.getAttribute("class");
		right.div.setAttribute("class", clas + " node-right");
		
		value = 2 * left.value + right.value;
		var p = document.createElement("p");
		p.textContent = nContent(n, "pell", value);
		div.appendChild(p);
		
		div.appendChild(left.div);
		div.appendChild(right.div);
	}
	
	return{"value" : value, "div" : div};
}

//The function for generating a graphical display of Tribonacci numbers. May be used as a functor
var trib = function tribonacci(n) {
	var value;
	var div = document.createElement("div");
	div.setAttribute("class", "node");
	
	if( n < 3) {
		if( n < 2) {
			value = 0;
		}
		else {
			value = 1;
		}
		var p = document.createElement("p");
		p.textContent = nContent(n, "trib", value);
		div.appendChild(p);
	}
	else {
		var left = tribonacci(n - 1);
		var clas = left.div.getAttribute("class");
		left.div.setAttribute("class", clas + " node-left");
		
		var center = tribonacci(n - 2);
		clas = center.div.getAttribute("class");
		center.div.setAttribute("class", clas + " node-center");
		
		var right = tribonacci(n - 3);
		clas = right.div.getAttribute("class");
		right.div.setAttribute("class", clas + " node-right");
		
		value = left.value + center.value + right.value;
		var p = document.createElement("p");
		p.textContent = nContent(n, "trib", value);
		div.appendChild(p);
		
		div.appendChild(left.div);
		div.appendChild(center.div);
		div.appendChild(right.div);
	}
	
	return{"value" : value, "div" : div};
}

var style = document.createElement("style");
style.textContent = ".tree {display: inline-block; width: 15000 px; border-color: rgb(255,0,0); background: rgb(180,60,60); box-shadow: 1px 1px 2px rgba(200,0,0,0.4); text-align: center; padding: 3px 10px;} "
+ ".node {background-color: rgba(0,0,255,0.1);} .node-left {float: left; display: inline-block; left-margin: 6px} " 
+ ".node-right {float: right; display: inline-block; right-margin: 6px} "
+ ".node-center {float: left; display: inline-block; left-margin: 4px;}";
document.querySelector("body").appendChild(style);

var fibRoot = document.createElement("div");
fibRoot.setAttribute("class", "fib");
document.querySelector("body").appendChild(fibRoot);
var spacing = document.createElement("p");
spacing.textContent = "\n\n";
document.querySelector("body").appendChild(spacing);
var pelRoot = document.createElement("div");
pelRoot.setAttribute("class", "pell");
document.querySelector("body").appendChild(pelRoot);
var spaceCopy = document.createElement("p");
spaceCopy.textContent = spacing.textContent;
document.querySelector("body").appendChild(spaceCopy);
var tribRoot = document.createElement("div");
tribRoot.setAttribute("class", "trib");
document.querySelector("body").appendChild(tribRoot);

display(11, fib, document.querySelector(".fib"));
display(11, pell, document.querySelector(".pell"));
display(11, trib, document.querySelector(".trib"));

var linkDiv = document.createElement("div");
var linkSpace = document.createElement("p");
linkSpace.textContent = "\n\n";
linkDiv.appendChild(linkSpace);
linkDiv.appendChild(linkSite("https://oeis.org/A000045", "fibonacci "));
linkDiv.appendChild(linkSite("https://oeis.org/A000129", "pell "));
linkDiv.appendChild(linkSite("https://oeis.org/A000073", "tribonacci "));
document.querySelector("body").appendChild(linkDiv);