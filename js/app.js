//
var playerScore = 0;
var computerScore = 0;  
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

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

//the win, lose and draw

//this changes and says that the player win
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = converToWord(playerChoice) + " beats " +  converToWord(computerChoice) + ", YOU WIN!";
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout( function(){document.getElementById(playerChoice).classList.remove('green-glow') }, 300);
}
//this changes and says that the player lost
function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = converToWord(playerChoice) + " loses to " +  converToWord(computerChoice) + ", YOU LOSE";
    document.getElementById(playerChoice).classList.add('red-glow');
  setTimeout( function(){document.getElementById(playerChoice).classList.remove('red-glow') }, 300);
}
//this changes and says that the player drew
function drew(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = converToWord(playerChoice) + " draws with " +  converToWord(computerChoice) + ", YOU DREW";
    document.getElementById(playerChoice).classList.add('white-glow');
    setTimeout( function(){document.getElementById(playerChoice).classList.remove('white-glow') }, 300);
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
            drew(playerChoice, computerChoice)
            break;
    }
}

//the click function
function main(){
    
    rock_div.addEventListener('click', function(){
        game("r")
    })
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}


main();