//Variables
const startBtn = document.querySelector(".start-btn");
const numberGuess = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-btn");
const message = document.querySelector(".message");
const callToAction = document.querySelector(".call-to-action");
let theNumber;

startBtn.innerText = "Start Game";

//Eventlisteners
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkNumber);

function startGame() {
  callToAction.innerText = "Guess a number between 0 and 10!";
  theNumber = Math.floor(Math.random() * 11);
  message.innerText = "";
}

//Functions
function checkNumber(event) {
  event.preventDefault();
  if (theNumber == numberGuess.value) {
    message.innerText = `You guessed ${numberGuess.value}, the right number! YEYY!`;
    callToAction.innerText = "";
    startBtn.innerText = "Play again";
  } else if (theNumber > numberGuess.value && theNumber < 11) {
    message.innerText = `Wrong, you guessed ${numberGuess.value}, guess a little bit higher.`;
  } else if (theNumber < numberGuess.value) {
    message.innerText = `Wrong, you guessed ${numberGuess.value}, guess a little bit lower.`;
  } else {
    message.innerText =
      "You have to guess a number between 0 and 10, try again.";
  }
  numberGuess.value = "";
}
