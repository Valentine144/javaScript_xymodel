var Touch = function(Point) {
	if (addPoint(Point))
		checkRadius();
}

var Storage = new Array;
var Radiuses = new Array;

var checkRadius = function() {

	var Answer = document.getElementById("Answer");

	for (var i in Storage) {
		if (i == Storage.length - 1)
			Answer.innerHTML += "- - - - -<br>"
		else 
		{
			Radiuses.push( 	Math.sqrt( 	Math.pow((Storage[i].x - Storage[Storage.length-1].x), 2) + 
							Math.pow((Storage[i].y - Storage[Storage.length-1].y), 2) ).toFixed(2) );

			Answer.innerHTML += "| A" + Storage.length + "A" + (Number(i)+1) + " | = " + 
			Radiuses[Radiuses.length-1]
			+ "<br>"
		}
	}

	var Beauty = document.getElementById("Beauty");

	Beauty.innerHTML = "The shortest radius is: " + Math.min.apply(Math, Radiuses) + "<br>" + "The longest radius is: " + Math.max.apply(Math, Radiuses);
}



class Dot {
	constructor(ThisPoint) {

		if (ThisPoint.style.backgroundColor == "")
		{
			// First coordinate X Getter
			for (var i in ThisPoint.parentElement.childNodes)
				if (ThisPoint.parentElement.childNodes[i] == ThisPoint)
				{
					this.cell = i;
					this.x = i/2 - 5.5;
				}

			// Second coordinate Y Getter
			for (var i in ThisPoint.parentElement.parentElement.childNodes)
				if (ThisPoint.parentElement.parentElement.childNodes[i] == ThisPoint.parentElement)
					{
						this.row = i;
						this.y = 5.5 - i/2;
					}

			this.Active = false;
		}
		else
		{
			this.Active = true;
		}
		
	}
	// destructor(){
	// 	// Mark ThisPoint as Black (NotActive)
	// 	ThisPoint.style.backgroundColor = "rgba(0,0,0,0.9)";
	// 	this.Active = false;
	// }
};

var addPoint = function (newDot) {
	
	var NewPoint = new Dot(newDot);

	if (NewPoint.Active)
	{
		return false;
	}
	else
	{
		if (newDot.style.backgroundColor == "")
			newDot.style.backgroundColor = "rgba(200, 0, 0, 0.9)";

		var Output = document.getElementById("Output");

		Storage.push(NewPoint);

		var thisPointInfo = "A" + Storage.length + "( " + NewPoint.x + ", " + NewPoint.y + " ), <br>";

		Output.innerHTML += thisPointInfo;
		newDot.innerHTML = "A" + Storage.length;

		return true;	
	}
}