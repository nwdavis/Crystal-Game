$(document).ready(function(){


	var userNum = 0;
	var compNum = 0;
	var blueNum = 0;
	var greenNum = 0;
	var purpleNum = 0;
	var yellowNum = 0;
	var wins = 0;
	var losses = 0;

	function randCompNum() {
		return Math.floor(Math.random() * 120 + 19);
	}


	function randCrystalNum() {
		return Math.floor(Math.random() * 12 + 1);
	}


	function gameStart() {

		compNum = randCompNum();
		userNum = 0;
		blueNum = randCrystalNum();		
		greenNum = randCrystalNum();		
		purpleNum = randCrystalNum();	
		yellowNum = randCrystalNum();		
	

		$("#computernumber").html("Wizard: " + compNum);
		$("#usernumber").html("You: " + userNum);
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);

	}


		$(".crystal").on("click", function(){
			if (this.id === "bluecrystal") {
				userNum +=  blueNum;
				$("#usernumber").html("You: " + userNum);

			} else if (this.id === "greencrystal") {
				userNum += greenNum;
				$("#usernumber").html("You: " + userNum);

			} else if (this.id === "purplecrystal") {
				userNum += purpleNum;
				$("#usernumber").html("You: " + userNum);

			} else if (this.id === "yellowcrystal") {
				userNum += yellowNum; 
				$("#usernumber").html("You: " + userNum);

			}

			if (userNum === compNum) {
				wins++;
				gameStart();
			}

			else if (userNum > compNum) {
				losses++;
				gameStart();
			}

		});

	gameStart();
});