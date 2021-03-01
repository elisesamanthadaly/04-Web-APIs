//VARIABLES
var highscoreButton = document.querySelector("#highscoreButton");
var timer = document.querySelector("#timer");
var timeLeft;
var timeInterval;
var quizHeader = document.querySelector("#quizHeader");
var instructions = document.querySelector("#instructions");
var startButton = document.querySelector("#startButton");
var questionNumber;
var score;

var question = document.querySelector("#question");
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");

var highscoresHeader = document.querySelector("#highscoresHeader");
var highscoreList = document.querySelector("#highscoreList");
var highscores = [];

var initialsForm = document.querySelector("#initialsForm");
var scoreDisplay = document.querySelector("#scoreDisplay");
var initialsInput = document.querySelector("#initialsInput");

var backButton = document.querySelector("#backButton");
var clearButton = document.querySelector("#clearButton");

var rightOrWrong = document.querySelector("#rightOrWrong");

//FUNCTIONS
//Triggered by clicking Start button
function startGame() {
  //Hide intro text/Start button, show question and choices
  quizHeader.style.display = "none";
  instructions.style.display = "none";
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
      question.innerHTML = "1. Which of these grows on trees?";
      a.innerHTML = "a) Apples"; //Correct
      b.innerHTML = "b) Potatoes";
      c.innerHTML = "c) Riddles";
      d.innerHTML = "d) Money";
      break;
    case 2:
      question.innerHTML = "2. Bats are...?";
      a.innerHTML = "a) Birds";
      b.innerHTML = "b) Mammals"; //Correct
      c.innerHTML = "c) Marsupials";
      d.innerHTML = "d) Giant bugs";
      break;
    case 3:
      question.innerHTML = "3. Which of these is not a dinosaur genus?";
      a.innerHTML = "a) Stegosaurus";
      b.innerHTML = "b) Diplodocus";
      c.innerHTML = "c) Smilodon"; //Correct
      d.innerHTML = "d) Tyrannosaurus";
      break;
    case 4:
      question.innerHTML = "4. Which fact is true about <i>Musa acuminata</i>, the Cavendish banana?";
      a.innerHTML = "a) It was replaced by the Gros Michel cultivar after being devastated by Panama disease in the 1950s";
      b.innerHTML = "b) It was the first kind of banana to be introduced to Europe";
      c.innerHTML = "c) Individual plants are called trees";
      d.innerHTML = "d) It was named after William Cavendish, 6th Duke of Devonshire"; //Correct
      break;
    case 5:
      question.innerHTML = "5. Did you have fun with this quiz?";
      a.innerHTML = "a) Yes!"; //Correct
      b.innerHTML = "b) No.";
      c.innerHTML = "c) Really, I did not.";
      d.innerHTML = "d) Please stop asking!";
      break;
  }
}

//Triggered by clicking an answer choice (a - d)
function selectAnswer(event) {
  //Question 1
  if (questionNumber === 1) {
    //If selected choice is correct, tell user and increase their score
    if (event.target.classList.contains("q1Right")) {
      rightOrWrong.innerHTML = "<hr>Right!";
      alertRightOrWrong();
      score++;
    }
    //If selected choice is incorrect, tell user and subtract time from timer
    else {
      rightOrWrong.innerHTML = "<hr>Wrong!";
      alertRightOrWrong();
      timeLeft-=15;
    }
    //Proceed to the next question
    nextQuestion();
  }
  //Question 2
  else if (questionNumber === 2) {
    if (event.target.classList.contains("q2Right")) {
      rightOrWrong.innerHTML = "<hr>Right!";
      alertRightOrWrong();
      score++;
    }
    else {
      rightOrWrong.innerHTML = "<hr>Wrong!";
      alertRightOrWrong();
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 3
  else if (questionNumber === 3) {
    if (event.target.classList.contains("q3Right")) {
      rightOrWrong.innerHTML = "<hr>Right!";
      alertRightOrWrong();
      score++;
    }
    else {
      rightOrWrong.innerHTML = "<hr>Wrong!";
      alertRightOrWrong();
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 4
  else if (questionNumber === 4) {
    if (event.target.classList.contains("q4Right")) {
      rightOrWrong.innerHTML = "<hr>Right!";
      alertRightOrWrong();
      score++;
    }
    else {
      rightOrWrong.innerHTML = "<hr>Wrong!";
      alertRightOrWrong();
      timeLeft-=15;
    }
    nextQuestion();
  }
  //Question 5
  else if (questionNumber === 5) {
    if (event.target.classList.contains("q5Right")) {
      rightOrWrong.innerHTML = "<hr>Right!";
      alertRightOrWrong();
      score++;
    }
    else {
      rightOrWrong.innerHTML = "<hr>Wrong!";
      alertRightOrWrong();
      timeLeft-=15;
    }
    //This is the last question; display highscore list/initials form. More questions can be inserted into this function if desired
    showHighscores();
  }
}

//Displays right/wrong alert briefly, then removes it
function alertRightOrWrong() {
  //Clears interval first in case user is clicking answers quickly (i.e. a prior alert is still visible)
  var alertInterval;
  clearInterval(alertInterval);

  var alertTime = 7.5;

  alertInterval = setInterval(function() {
    if (alertTime > 0) {
      rightOrWrong.style.display = "block";
      alertTime--;
    }
    else {
      rightOrWrong.style.display = "none";
      clearInterval(alertInterval);
    }
  }, 100);
}

//Trigged by clicking Highscore button, answering the last question, or running out of time
function showHighscores() {
  //Hide Highscore/Start buttons/intro text and questions/answer choices
  highscoreButton.style.display = "none";
  quizHeader.style.display = "none";
  instructions.style.display = "none";
  startButton.style.display = "none";
  question.style.display = "none";
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  //Show highscore header/list, initials form, Back/Clear buttons
  highscoresHeader.style.display = "block";
  highscoreList.style.display = "block";
  initialsForm.style.display = "block";
  scoreDisplay.innerHTML = "All done! Your score is " + score + "/5."
  backButton.style.display = "inline-block";
  clearButton.style.display = "inline-block";

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
  //Show Highscore/Start buttons/intro text, reset timer
  highscoreButton.style.display = "block";
  timeLeft = 0;
  timer.innerHTML = timeLeft;
  quizHeader.style.display = "block";
  instructions.style.display = "block";
  startButton.style.display = "block";
  //Hide highscore header, list/initials form/Clear and Back buttons, empty out right/wrong indicator
  highscoresHeader.style.display = "none";
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