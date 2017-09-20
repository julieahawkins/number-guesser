var ogMin = 0;
var ogMax = 100;

var randomNumber = generateRandomNumber()
console.log(randomNumber); 

var userGuess = document.querySelector('#getGuess');

var guessButton = document.querySelector('.guessButton');

var displayNumber = document.querySelector('#display')

var msg = document.querySelector('#msg');

var clearButton = document.querySelector('.clear');

var reset = document.querySelector('.reset');

var min = document.querySelector('#setMinimum');

var max = document.querySelector('#setMaximum');

var userSet = document.querySelector('.userSet'); 

var levelUpMsg = document.querySelector('#levelUp');

var newMin = document.querySelector('#newMin');

var newMax = document.querySelector('#newMax');

min.addEventListener('keyup', enableUserSet);
max.addEventListener('keyup', enableUserSet);
userSet.addEventListener('click', setUserMinMax);

guessButton.addEventListener('click', showGuess);
userGuess.addEventListener('keyup', enable);
clearButton.addEventListener('click', clear);
reset.addEventListener('click', resetGame);



function enableUserSet() {
  if (min.value === '' && max.value === '') {
    userSet.disabled = true;
  } else {
    userSet.disabled = false;
    reset.disabled = false;
  }
};


function setUserMinMax() {
  if (min.value !== '') {
    // console.log(min.value);
    ogMin = min.value;
  } 
  if (max.value !== '') {
    // console.log(max.value);
    ogMax = max.value;
  }
 // console.log(ogMin, ogMax);
 randomNumber = generateRandomNumber();
 // console.log(randomNumber);
 newMin.innerText = ogMin;
 newMax.innerText = ogMax;
 clearButton.disabled = false; 
};


function generateRandomNumber() {
  return Math.floor((Math.random() * (parseInt(ogMax) - parseInt(ogMin)+ 1)) + parseInt(ogMin));
};


function showGuess() {
  var guess = parseInt(userGuess.value);
  displayNumber.innerText = guess;
   if (guess === randomNumber) {
    displayNumber.innerText = '$ ' + guess + ' $';
    msg.innerText = 'BOOM, Right on the Money!!!';
    ogMax = parseInt(ogMax) + 10;
    ogMin = parseInt(ogMin) - 10; 
      // console.log(ogMin, ogMax);
    randomNumber = Math.floor((Math.random() * (parseInt(ogMax) - parseInt(ogMin)+ 1)) + parseInt(ogMin));
      // console.log(randomNumber);     
    userGuess.value = '';
    levelUpMsg.innerText = 'Next Level: Things get tougher!! Keep playing if you dare...';
    newMin.innerText = ogMin;
    newMax.innerText = ogMax;
  } else if (guess > randomNumber && guess <= ogMax) {
    msg.innerText = 'That is too high';
    levelUpMsg.innerText = '';
  } else if (guess < randomNumber && guess >= ogMin) {
    msg.innerText = 'That is too low';
    levelUpMsg.innerText = '';
  } else if (guess > ogMax || guess < ogMin) {
    msg.innerText = 'Oops! That number out of range! Keep Trying!';
    levelUpMsg.innerText = '';
  } 
};


function enable() {
  if (userGuess.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    reset.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    reset.disabled = false;
   }
 };


function clear() {
  // e.preventDefault();
  userGuess.value = '';
  min.value = '';
  max.value = '';
};


function resetGame() {
  window.location.reload();
};

  
