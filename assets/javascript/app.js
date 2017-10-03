/**
 *  @author Gus Nguyen 
 */

//Startup stuff
$(document).ready(function() {
	display();
	$(".start-button").on("click", grade);
	$(".start-button").on("click", startTimer);
	$(".start-button").on("click", function() {$(this).attr("hidden", "")});
});


