let randomNo = Math.ceil((Math.random() * 100));

const guess_no = document.querySelector(".guessNo");
const guess_btn = document.querySelector(".guess-btn");
const display = document.querySelector(".display");


function clickedBtn () {
    const guessNumber = Number(guess_no.value);
    if(guessNumber < 1 || guessNumber > 100){
        display.innerHTML = "Number out of context";
        return 
    }
    if ( guessNumber < randomNo) {
        display.innerHTML = "Guess too low";
    }else if (guessNumber > randomNo) {
        display.innerHTML = "Guess too high";
    }else{
        display.innerHTML = `Correct, your secreet number is ${guessNumber}`;
        game()
    }

    setTimeout(function(){
        display.innerHTML = "";
    }, 2000);
}

var guessNumber = Number(guess_no.value);
var newGame = `${guessNumber}`;
 function game(){
    setTimeout(()=>{
        randomNo = Math.ceil((Math.random() * 100))
        display.innerHTML = "New game have started";
    },5000);
 }

guess_btn.addEventListener('click', clickedBtn)