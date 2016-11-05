// var computerChoice = Math.floor((Math.random() * 10) + 1); //Generate random number 1-10
// var userChoice = prompt("Please enter a whole number between 1 and 10");

// function compareChoice () {
  // if(computerChoice == userChoice){
     // console.log("You got it right on the first try!");
  // }
  // else {
    // while (computerChoice != userChoice) {
      // userChoice = prompt("Try Again");
    // }
    // console.log("You finally got it right!");
  // }
// }

// compareChoice();

var computerChoice = Math.floor((Math.random() * 10) + 1); //Generate random number 1-10
var userChoice = prompt("Please enter a whole number between 1 and 10");
userChoice = parseInt(userChoice);
var firstTry = "You got it right on the first try!";
var finallyRight = "You finally got it right!";

function compareChoice () {
  if(computerChoice === userChoice){
     alert("You got it right on the first try!");
	
  }
  else {
    while (computerChoice > userChoice) {
      userChoice = prompt("The number is higher");
	  userChoice = parseInt(userChoice);
    }
	while (computerChoice < userChoice) {
		userChoice = prompt("The number is lower");
		userChoice = parseInt(userChoice);
     }
	alert("You finally got it right!");
  }
}

compareChoice();