const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const reset_div = document.getElementById("reset");

var winNoise = document.getElementById("winNoise");
var drawNoise = document.getElementById("drawNoise");
var loseNoise = document.getElementById("loseNoise");

//the user and computer choices

//computer choice and random number generator
function getComputerChoices(){
const choices = ['r', 'p', 's'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

//turns the letters of the callings r, p and s to their word version rock, paper and scissors
function converToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

// Initial time set
var initial = new Date().getTime();
var current; // current time

//the win, lose and draw

//this changes and says that the player win
function win(playerChoice, computerChoice) {
    setPlayerScore(getPlayerScore()+1);
    playerScore_span.innerHTML = getPlayerScore();
    computerScore_span.innerHTML = getComputerScore();
    result_p.innerHTML = converToWord(playerChoice) + " beats " +  converToWord(computerChoice) + ", YOU WIN!";
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout( function(){document.getElementById(playerChoice).classList.remove('green-glow') }, 300);
    winNoise.currentTime = 0;
    winNoise.play();
}
//this changes and says that the player lost
function lose(playerChoice, computerChoice) {
    setComputerScore(getComputerScore()+1);
    playerScore_span.innerHTML = getPlayerScore();
    computerScore_span.innerHTML = getComputerScore();
    result_p.innerHTML = converToWord(playerChoice) + " loses to " +  converToWord(computerChoice) + ", YOU LOSE";
    document.getElementById(playerChoice).classList.add('red-glow');
    setTimeout( function(){document.getElementById(playerChoice).classList.remove('red-glow') }, 300);
    loseNoise.currentTime = 0;
    loseNoise.play();
}
//this changes and says that the player drew
function drew(playerChoice, computerChoice) {
    playerScore_span.innerHTML = getPlayerScore();
    computerScore_span.innerHTML = getComputerScore();
    result_p.innerHTML = converToWord(playerChoice) + " draws with " +  converToWord(computerChoice) + ", YOU DREW";
    document.getElementById(playerChoice).classList.add('white-glow');
    setTimeout( function(){document.getElementById(playerChoice).classList.remove('white-glow') }, 300);
    drawNoise.currentTime = 0;
    drawNoise.play();
}

//the games rule of choice win lose and draw
function game(playerChoice){
    const computerChoice = getComputerChoices();
    switch(playerChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
            win(playerChoice, computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(playerChoice, computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            drew(playerChoice, computerChoice);
            break;
    }
}

//localStorage
function getPlayerScore(){
    const score = localStorage.getItem("playerScore");
    if (score === null){
        return 0;
    }
    else{
        return Number.parseInt(score);
    }
}
function getComputerScore(){
    const score = localStorage.getItem("computerScore");
    if (score === null){
        return 0;
    }
    else{
        return Number.parseInt(score);
    }
}
function setPlayerScore(newScore){
localStorage.setItem("playerScore", newScore);

}
function setComputerScore(newScore){
    localStorage.setItem("computerScore", newScore);

}

//  reset the score
function reset() {
playerScore_span.innerHTML = 0, setPlayerScore (newScore = 0);
computerScore_span.innerHTML =0,  setComputerScore (newScore = 0);

}

//the click function that updates from the condition
function main(){
    
    rock_div.addEventListener('click', function(){ game("r") })

    paper_div.addEventListener('click', function(){ game("p") })

    scissors_div.addEventListener('click', function(){ game("s") })

    playerScore_span.innerHTML = getPlayerScore();
    computerScore_span.innerHTML = getComputerScore();

    reset_div.addEventListener('click', function(){ reset("reset") })

}
main();