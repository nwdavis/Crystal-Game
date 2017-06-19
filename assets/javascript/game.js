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
	

		$("#computernumber").html("Wizard: " + compNum);
		$("#usernumber").html("You: " + userNum);
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);

		$(".btn").on("click", function(){
			if (this.id === "bluecrystal") {
				userNum = userNum + blueNum;
				$("#usernumber").html("You: " + userNum);
			} else if (this.id === "greencrystal") {
				userNum = userNum + greenNum;
				$("#usernumber").html("You: " + userNum);
			} else if (this.id === "purplecrystal") {
				userNum = userNum + purpleNum;
				$("#usernumber").html("You: " + userNum);
			} else if (this.id === "yellowcrystal") {
				userNum = userNum + yellowNum;
				$("#usernumber").html("You: " + userNum);
			}

			if (userNum === compNum) {
				wins++;
				userNum = 0;
				compNum = 0;
				blueNum = 0;
				greenNum = 0;
				purpleNum = 0;
				yellowNum = 0;
				gameStart();
			}

			if (userNum > compNum) {
				losses++;
				userNum = 0;
				compNum = 0;
				blueNum = 0;
				greenNum = 0;
				purpleNum = 0;
				yellowNum = 0;
				gameStart();
			}

		});

	}

	gameStart();
});