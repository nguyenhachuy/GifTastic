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
	$(".button-row").empty();
	topics.forEach((value, index, array) => {
		//Make a button
		var button = $("<button>").addClass(buttonClass).text(value).data("topic", value);
		//Append to row
		$(".button-row").append(button);
	});

}
$(".add").on("click", (event) => {
	event.preventDefault();
	var value = $(".new-char").val();
	console.log(value);
	topics.push(value);
	display();
});

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
		$(".gifs").empty();
		//Process the response better
		response = response.data;
		response.forEach((value) => {
			var div = $("<div>");
			var url = value.images.fixed_height.url;
			var gif = $("<img>");
			gif.attr("src", url);
			var title = $("<h1>").text(`Rating: ${value.rating}`);
			div.append(gif).prepend(title);
			$(".gifs").append(div);

		});
	});
}
