 /*
 Game Function:
  -Player must guess a number between a min and max
  -Player gets a certain amount of guesses
  -notify player of guesses remaining
  -notify the player of the correct answer if they lose
  -let player choose to play again
  */

//Game values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn');
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  //validate
  if(isNaN(guess)|| guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } 

  //check if won
  if (guess === winningNum){
    //Disable input
    gameOver(true, `${winningNum} is correct! You win!`);
  
  } else {
    //Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      gameOver(false), `Game Over, you lost. The correct number was ${winningNum}`;
    } else {

      //change border color
      guessInput.style.borderColor = "red";


      //Game Continues
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  } 
});

//game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = "green";
  //Set Message
  setMessage(msg);
}

function setMessage(msg, color){
  message.style.color = color ;
  message.textContent = msg;
}
