var clicks = 0;
var new_clicks = 0;

function hello() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};

function alt_count()
{
	var placeholderText = "foobar";
	var id = "targetId"
	document.getElementById(id).innerHTML = placeholderText;
}

function new_action(action){
	if (action == "add") {
		new_clicks += 1;
	} else if (action == "subtract" ) {
		new_clicks -=1;
	} else if (action == "square") {
		new_clicks = new_clicks * new_clicks;
	} else if (action == "cube") {
		new_clicks = new_clicks * new_clicks * new_clicks;
	}
	document.getElementById("newClicks").innerHTML = new_clicks;
}