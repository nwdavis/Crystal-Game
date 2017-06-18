$(document).ready(function(){


	var userNum = 0;
	var compNum = 0;
	var blueNum = 0;
	var greenNum = 0;
	var purpleNum = 0;
	var yellowNum = 0;
	var wins = 0;
	var losses = 0;

	//computer number between 19-120
	//crystal number between 1-12

	function randCompNum() {
		return Math.floor(Math.random() * 120 + 19);
	}


	function randCrystalNum() {
		return Math.floor(Math.random() * 12 + 1);
	}

	function gameStart() {

		compNum = randCompNum();
		blueNum = randCrystalNum();
		greenNum = randCrystalNum();
		purpleNum = randCrystalNum();
		yellowNum = randCrystalNum();

		


	}
});



//pick random comp number
//set random crystal amounts
//user number goes up by the amount of the each crystal when clicked
//if the user number equals the comp number, a win
//if the user number exceeds the comp number, a loss