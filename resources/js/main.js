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


  var screenEl = document.getElementById("screen");
  var clearEl = document.getElementById("clear");
  var backspaceEl = document.getElementById("backspace");
  var inputEls = document.querySelectorAll("#input .btn");
  var equalEl = document.getElementById("equal");

  var onButtonClick = function(e) {
    if(e.target.innerText != "=") {
      screenEl.innerHTML += e.target.innerText;
    }
  };

  inputEls.forEach (function(e) {
    e.addEventListener("click", onButtonClick);
  });

  var backspaceAction = function() {
      var content = screenEl.innerText;
      screenEl.innerText = content.substr(0, content.length - 1);
  }

  var clearAction = function() {
    screenEl.innerText = "";
    }

  var equalAction = function() {

    try {
    screenEl.innerText = eval(screenEl.innerText);
    }
    catch(error) {
      alert(error);
    }
  }

  equalEl.addEventListener("clickdown", equalAction);
  backspaceEl.addEventListener("click", backspaceAction);
  clearEl.addEventListener("click", clearAction);

  window.addEventListener('keydown', function(e) {
    const keyEl = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!keyEl) return;
    if(e.keyCode === 12) {
      clearAction();
    } else if (e.keyCode === 8) {
      backspaceAction();
    } else if (e.keyCode === 13) {
      equalAction();
    } else {
      screenEl.innerHTML += e.key;
    }
  })
});
