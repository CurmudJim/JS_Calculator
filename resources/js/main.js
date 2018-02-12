$(document).ready(function() {

  function calc(a,reducer) {
    if (a.length > 0) {
      return a.reduce(reducer);
    } else {
      return 0
    }
  }

  function sum(a) {
  	const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return calc(a,reducer);
  }

  function difference(a) {
  	const reducer = (accumulator, currentValue) => accumulator - currentValue;

  	return calc(a,reducer);
  }

  function multiply (a) {
  	const reducer = (accumulator, currentValue) => accumulator * currentValue;

  	return calc(a,reducer);
  }

  function divide (a) {
  	const reducer = (accumulator, currentValue) => accumulator / currentValue;

  	return calc(a,reducer);
  }

  var equationEl = document.getElementById("equation");
  var resultEl = document.getElementById("result");
  var clearEl = document.getElementById("clear");
  var backspaceEl = document.getElementById("backspace");
  var inputEls = document.querySelectorAll("#input .btn");
  var equalEl = document.getElementById("equal");

  function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  var onButtonClick = function(e) {
    if(e.target.innerText != "=") {
      if (equationEl.innerText.length <= 28) {
        equationEl.innerHTML += e.target.innerText;
      }
    }
  };

  inputEls.forEach (function(e) {
    e.addEventListener("click", onButtonClick);
  });

  var backspaceAction = function() {
      var content = equationEl.innerText;
      equationEl.innerText = content.substr(0, content.length - 1);
  }

  var clearEquationAction = function() {
    equationEl.innerText = "";
    }
  var clearResultAction = function() {
    resultEl.innerText = "";
  }

  var clearAction = function() {
    clearEquationAction();
    clearResultAction();
    }

  var equalAction = function() {
    if (isNaN(equationEl.innerText[0]) && equationEl.innerText[0] != ".") {
      var equation = resultEl.innerText + equationEl.innerText
    } else {
      clearResultAction();
      var equation = equationEl.innerText
    }

    try {
      resultEl.innerText = precisionRound(eval(equation), 2);
      clearEquationAction();
      }
    catch(error) {
      alert(error);
      clearEquationAction();
    }
  }

  equalEl.addEventListener("click", equalAction);
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
    } else if (equationEl.innerText.length <= 28) {
      equationEl.innerHTML += e.key;
    }
  });
});
