//VARIABLES
var highscoreButton = document.querySelector("#highscoreButton");
var timer = document.querySelector("#timer");
var timeLeft;
var timeInterval;
var startButton = document.querySelector("#startButton");
var questionNumber;
var score;

var question = document.querySelector("#question");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");

var highscoreList = document.querySelector("#highscoreList");
var highscores = [];

var initialsForm = document.querySelector("#initialsForm");
var initialsInput = document.querySelector("#initialsInput");

var backButton = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton");

var rightOrWrong = document.querySelector("#rightOrWrong");

//FUNCTIONS
//Triggered by clicking Start button
function startGame() {
  //Hide Start button, show question and choices
  startButton.style.display = "none";
  question.style.display = "block";
  a.style.display = "block";
  b.style.display = "block";
  c.style.display = "block";
  d.style.display = "block";

  //Reset question # and score for a new game. Start game timer and proceed to first question
  questionNumber = 0;
  score = 0;
  startTimer();
  nextQuestion();
}

//Triggered by clicking Start button
function startTimer() {
  //Starting time
  timeLeft = 75;

  timeInterval = setInterval(function () {
    //Display time left as it decrements
    if (timeLeft >= 1) {
      timer.innerHTML = timeLeft;
      timeLeft--;
    }
    //When timer runs out, tell user, stop timer, and show highscores
    else {
      timer.innerHTML = 0 + " - You ran out of time!";
      clearInterval(timeInterval);
      showHighscores();
    }
  }, 1000);
}

//Advances question # and populates question text according to current question #
function nextQuestion() {
  questionNumber++;

  switch (questionNumber) {
    case 1:
      question.innerHTML = "Question1";
      a.innerHTML = "a1";
      b.innerHTML = "b1";
      c.innerHTML = "c1";
      d.innerHTML = "d1";
      break;
    case 2:
      question.innerHTML = "Question2";
      a.innerHTML = "a2";
      b.innerHTML = "b2";
      c.innerHTML = "c2";
      d.innerHTML = "d2";
      break;
    case 3:
      question.innerHTML = "Question3";
      a.innerHTML = "a3";
      b.innerHTML = "b3";
      c.innerHTML = "c3";
      d.innerHTML = "d3";
      break;
    case 4:
      question.innerHTML = "Question4";
      a.innerHTML = "a4";
      b.innerHTML = "b4";
      c.innerHTML = "c4";
      d.innerHTML = "d4";
      break;
    case 5:
      question.innerHTML = "Question5";
      a.innerHTML = "a5";
      b.innerHTML = "b5";
      c.innerHTML = "c5";
      d.innerHTML = "d5";
      break;
  }
}

//Triggered by clicking an answer choice (a - d)
function selectAnswer(event) {
  //Question 1
  if (questionNumber === 1) {
    //If selected choice is correct, tell user and increase their score
    if (event.target.classList.contains("q1Right")) {
      rightOrWrong.innerHTML = "You got Question 1 right!";
      score++;
    }
    //If selected choice is incorrect, tell user and subtract time from timer
    else {
      rightOrWrong.innerHTML = "You got Question 1 wrong!";
      timeLeft-=15;
    }
    //Proceed to the next question
    nextQuestion();
  }
  //Question 2
  else if (questionNumber === 2) {
    if (event.target.classList.contains("q2Right")) {
      rightOrWrong.innerHTML = "You got Question 2 right!";
      score++;
    }
    else {
      rightOrWrong.innerHTML = "You got Question 2 wrong!";
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 3
  else if (questionNumber === 3) {
    if (event.target.classList.contains("q3Right")) {
      rightOrWrong.innerHTML = "You got Question 3 right!";
      score++;
    }
    else {
      rightOrWrong.innerHTML = "You got Question 3 wrong!";
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 4
  else if (questionNumber === 4) {
    if (event.target.classList.contains("q4Right")) {
      rightOrWrong.innerHTML = "You got Question 4 right!";
      score++;
    }
    else {
      rightOrWrong.innerHTML = "You got Question 4 wrong!";
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 5
  else if (questionNumber === 5) {
    if (event.target.classList.contains("q5Right")) {
      rightOrWrong.innerHTML = "You got Question 5 right!";
      score++;
    }
    else {
      rightOrWrong.innerHTML = "You got Question 5 wrong!";
      timeLeft-=15;
    }
    //This is the last question; display highscore list/initials form. More questions can be inserted into this function if desired
    showHighscores();
  }
}

//Trigged by clicking Highscore button, answering the last question, or running out of time
function showHighscores() {
  //Hide Highscore/Start buttons and questions/answer choices
  highscoreButton.style.display = "none";
  startButton.style.display = "none";
  question.style.display = "none";
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  //Show highscore list, initials form, Back/Clear buttons
  highscoreList.style.display = "block";
  initialsForm.style.display = "block";
  backButton.style.display = "block";
  clearButton.style.display = "block";

  //Stop the timer
  clearInterval(timeInterval);

  //Parse local storage
  storedHighscores = JSON.parse(localStorage.getItem("highscores"));

  //Prevents attempting to use an empty array
  var storedHighscores;
  if (storedHighscores !== null) {
    highscores = storedHighscores;
  }

  //Render highscore list
  updateHighscoreList();
}

//Stores highscores in local storage
function storeHighscores() {
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

//Renders highscore list according to current array contents
function updateHighscoreList() {
  //Clears out list to prevent doubling
  highscoreList.innerHTML = "";

  //Creates a list item for each score in array
  for (var i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = highscores[i];
    highscoreList.appendChild(li);
  }
}

//EVENT LISTENERS
//Click the Highscore button to show highscores
highscoreButton.addEventListener("click", function() {
  showHighscores();
  //Removes initials form since user should only input at end of game
  initialsForm.style.display = "none";
});

//Click the Start button to begin the game
startButton.addEventListener("click", startGame);

//Click 1/4 answer choices during the game
a.addEventListener("click", selectAnswer);
b.addEventListener("click", selectAnswer);
c.addEventListener("click", selectAnswer);
d.addEventListener("click", selectAnswer);

//Input initials for highscore storage at end of game
initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var newInitials = initialsInput.value.trim();

  //Prevents empty form submission
  if (newInitials === "") {
    return;
  }

  //Pushes new highscore to array. New highscore contains user-inputted initials and their actual score/5 questions
  var newHighscore = newInitials + " - " + score + "/5"
  highscores.push(newHighscore);
  initialsInput.value = "";

  //Store the new array in local storage, and re-render the highscore list
  storeHighscores();
  updateHighscoreList();
});

//Click to start the game over
backButton.addEventListener("click", function() {
  //Show Highscore/Start buttons, reset timer
  highscoreButton.style.display = "block";
  timeLeft = 0;
  timer.innerHTML = timeLeft;
  startButton.style.display = "block";
  //Hide highscore list/initials form/Clear and Back buttons, empty out right/wrong indicator
  highscoreList.style.display = "none";
  initialsForm.style.display = "none";
  backButton.style.display = "none";
  clearButton.style.display = "none";
  rightOrWrong.innerHTML = "";
});

//Click to clear stored highscores
clearButton.addEventListener("click", function() {
  highscores = [];
  storeHighscores();
  updateHighscoreList();
});