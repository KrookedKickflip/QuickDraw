
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var lettersInChosenWord = [];
var blanksLetters = [];
var input = document.querySelector(".large-font word-blanks")
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];
var currentWordIndex = 0;

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetScore);
document.addEventListener("input", checkGuess);
document.addEventListener("keydown", (event) => {

  var guess = event.key;

  if (guess === lettersInChosenWord[currentWordIndex]) {

    blanksLetters[currentWordIndex] = guess;
    wordBlank.textContent = blanksLetters.join(" ");
    currentWordIndex++;

    if (currentWordIndex === numBlanks) {

      clearInterval(timer);
      isWin = true;
      winCounter++;
      win.textContent = winCounter;

      resetGame();
    }
  }
});

function startGame() {

  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = [];
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }

  wordBlank.textContent = blanksLetters.join(" ");
  timerCount = 5;
  timerElement.textContent = timerCount;

  startTimer();
}

function startTimer() {

  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {

      clearInterval(timer);
      loseCounter++;
      lose.textContent = loseCounter;

      
    }
  }, 1000);
}

function checkGuess() {

  var guess = input.value;

  if (guess === chosenWord) {

    clearInterval(timer);
    isWin = true;
    winCounter++;
    win.textContent = winCounter;
  

    var letter = document.createElement("span");
    letter.innerHTML = guess;
    document.body.appendChild(letter);
  }

  

  if (isWin || timerCount === 0) {
    resetGame();
  }
}


function resetGame() {
  
  chosenWord = "";
  numBlanks = 0;
  lettersInChosenWord = [];
  blanksLetters = [];
  isWin = false;

  startGame();
} 

function resetScore() {
  winCounter = 0;
  loseCounter = 0;
  win.textContent = winCounter;
  lose.textContent = loseCounter;
}

  
