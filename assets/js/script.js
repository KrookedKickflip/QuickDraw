var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var lettersInChosenWord = [];
var blanksLetters = [];
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// create a function that runs when the page loads
function loadPage()
// create a startGame function that is called with the start button is clicked
function startGame()
// create a winGame function that runs when the win condition is met
function winGame()
// create a loseGame function that runs with timer reaches 0
function loseGame()
// create a setTimer function that starts and stops the timer and triggers winGame() or loseGame()
function setTimer()
// create a function that creates blanks on the screen that correspond to the number of letters in the word that's to be guessed

// create a function that updates wins on screen and sets win count to local storage
function setWin() {
    // Increment the win count
    let winCount = parseInt(localStorage.getItem("winCount")) || 0;
    winCount++;
    localStorage.setItem("winCount", winCount);
  
    // Update the win count on the screen
    let winCounter = document.getElementById("win-counter");
    winCounter.innerHTML = winCount;
  }
// create a function that updates losses on screen and sets loss count to local storage
function setLoss()
// create a function that checks if the player as won, if so set the isWin variable to true

// create a function that tests if the guessed letter is in the word and renders it to the screen

// attach a keydown event listener to run the checkLetters function and the checkWin function;

// attach a click event listener to run the startGame function