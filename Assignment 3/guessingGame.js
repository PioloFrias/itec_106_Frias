// Declare variables outside of the function to ensure their values persist
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attemptCount = 0;

// Get container element
const gameContainer = document.getElementById("container");

// Get HTML elements
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const hintMessage = document.getElementById("hint");
const attemptDisplay = document.getElementById("attempts");

// Event Listener for button click
submitButton.addEventListener("click", checkGuess);

// Function to check the guess
function checkGuess() {
  const userGuess = Number(guessInput.value);

  // Check if user input is a valid number between 1 and 10
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10 || !Number.isInteger(userGuess)) {
    hintMessage.textContent = "Invalid input: Please input a number between 1 - 10.";
    return; // Exit the function if input is invalid
  }

  attemptCount++;

  // Using Conditionals
  if (userGuess === randomNumber) {
    hintMessage.textContent = "Congratulations, you guessed it!";
    attemptDisplay.textContent = "Attempts: " + attemptCount;
    // Add CSS class to adjust height
    gameContainer.classList.add("congrats-height");
    // Disable the input field and submit button when the user wins
    guessInput.disabled = true;
    submitButton.disabled = true;
  } else if (userGuess > randomNumber) {
    hintMessage.textContent = "Too high! Try again.";
  } else if (userGuess < randomNumber) {
    hintMessage.textContent = "Too low! Try again.";
  }
}
