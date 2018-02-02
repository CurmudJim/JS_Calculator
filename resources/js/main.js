$(document).ready(function() {

  function sum(a) {
  	const reducer = (accumulator, currentValue) => accumulator + currentValue;

  	if (a.length > 0) {
  		return a.reduce(reducer);
  	} else {
  		return 0
  	}
  }

  function difference(a) {
  	const reducer = (accumulator, currentValue) => accumulator + currentValue;

  	if (a.length > 0) {
  		return a.reduce(reducer);
  	} else {
  		return 0
  	}
  }


  var inputScreenEl = document.getElementById("inputScreen");
  var outputScreenEl = document.getElementById("outputScreen");
  var clearEl = document.getElementById("clear");
  var backspaceEl = document.getElementById("backspace");
  var inputEls = document.querySelectorAll("#input .btn");
  var equalEl = document.getElementById("equal");

  var onButtonClick = function(e) {
    if(e.target.innerText != "=") {
      inputScreenEl.innerHTML += e.target.innerText;
    }
  };

  inputEls.forEach (function(e) {
    e.addEventListener("click", onButtonClick)
  });

  var equalClick = function() {
    outputScreenEl.innerText = eval(inputScreenEl.innerText)
  }

  var backspaceClick = function() {
      var content = inputScreenEl.innerText;
      inputScreenEl.innerText = content.substr(0, content.length - 1);
  }

  var clearClick = function() {

    outputScreenEl.innerText = "";
    }

  var equalClick = function() {
    outputScreenEl.innerText = eval(inputScreenEl.innerText)
    inputScreenEl.innerText = "";
  }

  equalEl.addEventListener("click", equalClick);
  backspaceEl.addEventListener("click", backspaceClick);
  clearEl.addEventListener("click", clearClick);


});
