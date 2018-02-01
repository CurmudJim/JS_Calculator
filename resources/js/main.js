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
  var backspaceEl = document.getElementById("backspace");
  var inputEls = document.querySelectorAll("#input .btn");

  var onButtonClick = function(e) {
    inputScreenEl.innerHTML += e.target.innerText;
  };

  inputEls.forEach (function(e) {
    e.addEventListener("click", onButtonClick)
  });

  var backspaceClick = function() {
      var content = inputScreenEl.innerText;
      inputScreenEl.innerText = content.substr(0, content.length - 1);
  }

  backspaceEl.addEventListener("click", backspaceClick);

});
