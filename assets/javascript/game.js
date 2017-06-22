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
		console.log(blueNum)
		greenNum = randCrystalNum();
		console.log(greenNum)
		purpleNum = randCrystalNum();
		console.log(purpleNum)
		yellowNum = randCrystalNum();
		console.log(yellowNum)
	

		$("#computernumber").html("Wizard: " + compNum);
		$("#usernumber").html("You: " + userNum);
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);

		$(".test").on("click", function(){
			alert("You Clicked!")
			if (this.id === "bluecrystal") {
				userNum += blueNum;
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



//Why does it multiply the crystal number by 2 the second time playing?