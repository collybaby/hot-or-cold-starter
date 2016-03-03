
$(document).ready(function(){
	var randomNumber = Math.floor((Math.random () * 100) +1);
	var n = $("#guessButton").val();
	n = parseInt (n);
	n = math.abs();
	$("#guessButton").val("");
	$("#guessList").append("<li>" + n + "</li>" );
		
		

		for ( ; ; ){
	
			if (randomNumber - n < 10) {
				$("#feedback").append("<h2>" + "Cold" + "</h2")
			}
			else if (randomNumber - n > 10) {
				$("#feedback").append("<h2>" + "Hot" + "</h2")
			}
			else (randomNumber - n == 0) {
				$("#feedback").append("<h2>" + "You Got It!" + "</h2>")
			}
		}
	})
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


