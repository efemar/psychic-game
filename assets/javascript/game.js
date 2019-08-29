

// Setting the variables for each user
var letters =
  ["a", "b", "c", "d",
    "e", "f", "g", "h",
    "i", "j", "k", "l",
    "m", "n", "o", "p",
    "q", "r", "s", "t",
    "u", "v", "w", "x",
    "y", "z"]

console.log(letters)

var userText = document.getElementById("user");
var compText = document.getElementById("computer");
var winText = document.getElementById("win");
var loseText = document.getElementById("loss");
var guessText = document.getElementById("guess-left");
var wins = 0;
var losses = 0;
var guesses = 9;


//Create an array for chosen values
var guessesChosen = []


// This specifies that computer only picks a key after the user has picked one
// Display user's chose
// Display computer's chose

//User picks a letters
document.onkeyup = function (event) {
  var letter = letters[Math.floor(Math.random() * letters.length)]
  console.log(letter)

  // push the guesses chosen to the array
  guessesChosen.push(event.key);
  guessesChosen1 = guessesChosen.toString();
  console.log(guessesChosen1);

  // Display user's choice
  userText.textContent = guessesChosen1;

  //Compare the user's pick with the computer's pick
  //Decide if user has lost/won
  if (event.key === letter) {

    //Display the win or loss score
    wins++; winText.textContent = wins;

    //Need to Reset the Guesses Score back to Nine
    if (guesses < 9) {
      guesses = 9
      guessText.textContent = guesses;
      console.log('in guesses func')
    }
  }
  if (event.key !== letter) {

    //Decrease the number of guesses when user loses
    guesses--; guessText.textContent = guesses;

  }
  if (guesses === 0) {

    //Display the win or loss score
    losses++; loseText.textContent = losses;
    guesses = 9;
    
    function empty() {
      //empty your array 
      guessesChosen = [];
  }
    empty();
    console.log(guessesChosen);
    
  }
}





