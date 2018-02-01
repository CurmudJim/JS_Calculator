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

function sum(a) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	if (a.length > 0) {
		return a.reduce(reducer);
	} else {
		return 0
	}
}

  $("#size").keyup(function(event){
    if(event.keyCode == 13){
      $("#startBtn").click();
    }
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getRandomColor() {
    var color = `${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}`;
    return color;
  }


  $('#startBtn').click(function() {



    var size = $('input').val();
    $('#size').val('')
    if (size=='') {
      size = 16
    }
    if (size<2 || size>64){
      alert("Enter a number greater than 1 and less than 65.");
      return false;
    }else {
      $('.input-group').hide();
      $('.jumbotron').append('<div class="btn-group" role="group" aria-label="Basic example">\
      <button type="button" class="btn btn-dark">Black</button>\
      <button type="button" class="btn btn-light">Color</button>\
      <button type="button" class="btn btn-danger">Reset</button></div>');
      $('.jumbotron').append('<div class="container"></div>');

      for (var i = 0; i < size; i++) {
        $('.container').append('<div class="row"></div>');
      }

      for (var i = 0; i < size; i++) {
        $('.row').append('<div class="cell"></div>');
      }

      var cellParimeter = 100 / size;
      $('.cell').css("width", cellParimeter + '%');
      $('.row').css("height", cellParimeter + '%');


      const cells = document.querySelectorAll('.cell');




      $('.btn-dark').click(function() {
        cells.forEach((cell) => {
          var tint = .0;
          cell.addEventListener("mouseover", function(e) {
            e.target.style.background = `rgba(0,0,0,${tint+=.1})`
          })
        });
      });

      $('.btn-light').click(function() {
        cells.forEach((cell) => {
          var tint = .0;
          cell.addEventListener("mouseover", function(e) {
            e.target.style.background = `rgba(${getRandomColor()},${tint+=.1})`
          })
        });
      });

      $('.btn-danger').click(function() {
        $('.btn-group').hide(0);
        $('.container').remove();
        $('.input-group').show('slow');

      });
    }

  });





});
