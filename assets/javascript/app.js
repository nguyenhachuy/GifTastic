/**
 *  @author Gus Nguyen 
 */

//Startup stuff
$(document).ready(function() {
	display();
});

//Dynamic Jquery 
$(document).on("click", ".button", ajaxCall);
//Global vars
var queryURL = "https://api.giphy.com/v1/gifs/search";
var key = "dc6zaTOxFJmzC";

var topics = ["Rick Sanchez", "Morty Smith", "Betty Smith", "Summer Smith"];
var buttonClass = "btn btn-success button mx-auto";
function display() {
	topics.forEach((value, index, array) => {
		//Make a button
		var button = $("<button>").addClass(buttonClass).text(value).data("topic", value);
		//Append to row
		$(".button-row").append(button);
	});
}

function ajaxCall() {
	var topic = $(this).data("topic");
	$.ajax({
		url: queryURL,
		method:"GET",
		data: {
			api_key: key,
			q: topic,
			rating: "g"
		},
	}).done(function(response) {
		console.log(response);
		$(".content").empty();
		//Process the response better
		response = response.data;
		response.forEach((value) => {
			var url = value.images.fixed_height.url;
			var gif = $("<img>");
			gif.attr("src", url);
			$(".content").append(gif);

		});
	});
}
