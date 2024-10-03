let randomNum = Math.floor(Math.random() * 100) + 1;

let submitBtn = document.querySelector('button');
let input = document.querySelector('#GuessIpt');
let GuessSlot = document.querySelector('#preGss');
let remainingGuess = document.querySelector('#remGss');
let lowOrHi = document.querySelector('#lowOrHi');
let startOver = document.querySelector('.results');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 10;

let playGame = true;

if(playGame) {

  submitBtn.addEventListener('click', function() {

    const guess = parseInt(input.value);
    validateGuess(guess);
  })
}

function validateGuess(guess) {

  if(isNaN(guess)) {
    alert("Please enter a valid number");
    input.value = '';
  }
  else if(guess < 1) {
    alert("Please enter a number more than 1");
    input.value = '';
  }
  else if(guess > 100) {
    alert("Please enter a number less than 100");
    input.value = '';
  }
  else {
    prevGuess.push(guess);
    
    if(numGuess == 1) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was: ${randomNum}`);
      endGame();
    }
    else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess (guess){
  
  if(guess === randomNum) {
    displayMessage(`You guessed it right, the random number was ${randomNum}`);
    endGame();
  }
  else if(guess < randomNum) {
    displayMessage("Number is TOOO low");
  }
  else if(guess > randomNum) {
    displayMessage("Number is TOOO high");
  }
}

function displayGuess (guess){
  input.value = '';
  GuessSlot.innerHTML += `${guess}, `;
  numGuess--;
  remainingGuess.innerHTML = `${numGuess}`;
}

function displayMessage (message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame" style = " border: 2px solid white; width: fit-content; padding: 0.5rem; border-radius: 1rem; background-color: #680000; color: #ff9500">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame (){

  let newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function() {

    randomNum = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 10;
    GuessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled', '');
    startOver.removeChild(p);
    lowOrHi.innerHTML = ``;

    playGame = true;

  });
}

