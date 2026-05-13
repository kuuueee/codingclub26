function changeMoneyInWallet()
{
	console.log("money_in_wallet : " + document.getElementById("money_in_wallet").value);
	return;
}

function loopDirection()
{
	var direction = 0;
	var loops = document.getElementById("loopDirections").value
	for (var i = 0; i < loops; i++)
	{
		if (i < 2) {
			direction = (direction % 360) - 15;
		}
		console.log("When i = " + i + " - Moved one step " + direction + "°");
	}
}