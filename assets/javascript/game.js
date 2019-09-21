
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",  ];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
//I am making 4 of these for each id class//
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var computerGuess;
// Reset game stats
function gameStart() {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  winsText.innerText = wins;
  lossesText.innerText = losses;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesLeft = 9;
  guessesLeftText.innerText = guessesLeft;
}
// once page loads, the game starts
document.addEventListener("DOMContentLoaded", function() {
  gameStart();
});
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;
  // Reworked our code from last step to use "else if" instead of lots of if statements.
  if (userGuess !== computerGuess && guessesLeft > 0) {
    guessesLeft--;
    guessesLeftText.innerText = guessesLeft;
  }
  else if (userGuess === computerGuess && guessesLeft > 0) {
    wins++;
    alert("YOU WIN!!");
    gameStart();
  }
  else {
    losses++;
    alert("YOU LOSE!!");
    gameStart();
  }
  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
}