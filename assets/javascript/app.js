/**
 *  @author Gus Nguyen 
 */

//Startup stuff
$(document).ready(function() {
	display();
});

//Global vars
var topics = ["Rick Sanchez", "Morty Smith", "Betty Smith", "Summer Smith"];
var buttonClass = "btn btn-success button mx-auto";
function display() {
	topics.forEach((value, index, array) => {
		//Make a button
		var button = $("<button>").addClass(buttonClass).text(value);
		//Append to row
		$(".button-row").append(button);
	});
}

