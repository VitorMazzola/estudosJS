var myImg = document.querySelector('img');

myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox.png'){
		myImg.setAttribute('src','images/corinthians.png');
	} else {
		myImg.setAttribute('src','images/firefox.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Por favor, insira seu nome.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla é legal, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla é legal, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
