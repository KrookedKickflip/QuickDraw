const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");
const startButton = document.getElementById("start-button");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

// Event listeners
startButton.addEventListener("click", startQuiz);
initialsForm.addEventListener("submit", handleFormSubmit);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none";
  initialsForm.style.display = "none";
  showQuestion();
  startTimer();
}

// Function to display a question
function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  quizContainer.appendChild(questionElement);

  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.addEventListener("click", checkAnswer);
    quizContainer.appendChild(optionElement);
  });
}

// Function to check the selected answer
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  } else {
    // Subtract 5 seconds for an incorrect answer
    timeLeft -= 5; 
  }

  currentQuestionIndex++;
  clearQuestion();

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
    resetTimer();
  } else {
    endQuiz();
  }
}

// Function to clear the question and options
function clearQuestion() {
  quizContainer.innerHTML = "";
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  resultContainer.style.display = "block";
  scoreContainer.textContent = `Your score: ${score}`;
  initialsForm.style.display = "block";
}

// Function to start the timer
function startTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  timeLeft = 10;
  const timerElement = document.getElementById("timer");
  timerElement.textContent = timeLeft;
}

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const initials = initialsInput.value.trim().toUpperCase();
  // Handle saving initials and score
  console.log(`Initials: ${initials}, Score: ${score}`);
  // Refresh the page to restart the quiz
  location.reload(); 
}


