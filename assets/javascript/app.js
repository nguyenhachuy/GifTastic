/**
 *  @author Gus Nguyen 
 */

//Startup stuff
$(document).ready(function() {
	display();
});

//Dynamic Jquery 
$(document).on("click", ".button", ajaxCall);
$(document).on("click", ".gif", animate);
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
			var url_still = value.images.fixed_height_still.url;
			var url_animate = value.images.fixed_height.url;
			var gif = $("<img>");
			gif.attr("src", url_still).attr("data-state", "still")
			.attr("data-still", url_still).attr("data-animate", url_animate).addClass("gif");
			var title = $("<h1>").text(`Rating: ${value.rating}`);
			div.append(gif).prepend(title);
			$(".gifs").append(div);

		});
	});
}

//Borrowed from what we did in class
function animate() {
  var state = $(this).attr("data-state");
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	if (state === "still") {
  	$(this).attr("src", $(this).attr("data-animate"));
  	$(this).attr("data-state", "animate");
	} else {
  	$(this).attr("src", $(this).attr("data-still"));
  	$(this).attr("data-state", "still");
	}

}