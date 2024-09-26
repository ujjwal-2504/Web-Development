let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let hiScore = 0;

let startText = document.querySelector('#startText');
let HiScore = document.querySelector('h2');

document.addEventListener('keypress', function() {

  if(!started) {
    started = true;
    console.log(started);

    levelUp();

  }
});

function levelUp() {

  userSeq = [];
  level++;

  startText.innerText = `Level ${level}`;

  if(hiScore < level) {

    hiScore = level;
    HiScore.innerText = `Highest Score: ${hiScore}`;

  }

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  console.log(gameSeq);

  gameFlash(randomBtn);
}

function gameFlash(btn) {
  btn.classList.add('flash');

  setTimeout(function() {
    btn.classList.remove('flash')
  }, 250)
}

function userFlash(btn) {
  btn.classList.add('userFlash');

  setTimeout(function() {
    btn.classList.remove('userFlash')
  }, 250)
}

function checkAns(idx) {

  if(userSeq[idx] === gameSeq[idx]) {
    
    if(userSeq.length == gameSeq.length) {

      setTimeout(levelUp, 1000);
    }
  }
  else {

    startText.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`
    document.querySelector('body').style.backgroundColor = 'red';
    
    setTimeout(function() {
      document.querySelector('body').style.backgroundColor = 'white';
    }, 150)

    reset();
  }
}

function btnPress() {

  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute('id');
  // let userColor = this.id;
  // console.log(userColor);

  userSeq.push(userColor);

  checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns) {
  btn.addEventListener('click', btnPress);
}

function reset() {

  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

let numBtn = document.querySelector('#numbers');

let clicked = false;

numBtn.addEventListener('click', function() {

  clicked = !clicked;
  console.log(clicked);

  if(clicked) {
    let i = 1;
    for(btn of allBtns) {
      btn.innerText = i;
      i++;
    }
  }
  else {
    for(btn of allBtns) {
      btn.innerText = '';
    }
  }
});