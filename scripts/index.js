function getComputerChoice(){
    let computerChoice = (Math.random() * 3) + 1;

    if(computerChoice >= 3){
        return "rock";
    }
    else if(computerChoice >= 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
const computerSelection = getComputerChoice();
let playerSelection = "";
let gameLocked = false;

let playerScore = 0;
let computerScore = 0;

function setPlayerToRock(){
    playerSelection = "rock";
    game();
}
function setPlayerToPaper(){
    playerSelection = "paper";
    game();
}
function setPlayerToScissors(){
    playerSelection = "scissors";
    game();
}
function playRound(player, computer){
    computer = getComputerChoice();
    if(computer === "rock"){
        switch(player){
            case "paper":
                return `You win! ${player} beats ${computer}.`;
            case "scissors":
                return `You lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
    else if(computer === "paper"){
        switch(player){
            case "scissors":
                return `You win! ${player} beats ${computer}.`;
            case "rock":
                return `You lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
    else if(computer === "scissors"){
        switch(player){
            case "rock":
                return `You win! ${player} beats ${computer}.`;
            case "paper":
                return `You lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
}
function game(){

    if(gameLocked){
        alert("You need to restart the game to play.");
    }
    else{
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        changeWinner(result);
        updateScore(result);
    }
}
function updateScore(resultMessage){
    const scoreBox = document.querySelector("#score");
    const scoreMessage = document.querySelector("#result-message");
    if(playerScore >= 5){
        scoreBox.textContent = `${playerScore} - ${computerScore}`;
        scoreMessage.textContent = `You did it. You won against the computer.`;
        gameLocked = true;
    }
    else if(computerScore >= 5){
        scoreBox.textContent = `${playerScore} - ${computerScore}`;
        scoreMessage.textContent = `You lost against the "AI". Good luck next time.`;
        gameLocked = true;
    }
    else{
        scoreBox.textContent = `${playerScore} - ${computerScore}`;
        scoreMessage.textContent = resultMessage;
    }
}
function restartGame(){
    gameLocked = false;
    playerScore = 0;
    computerScore = 0;
    const scoreBox = document.querySelector("#score");
    scoreBox.textContent = `${playerScore} - ${computerScore}`;
    const scoreMessage = document.querySelector("#result-message");
    scoreMessage.textContent = `Game has been restarted!`;
}
function changeWinner(input){
    const winnerImage = document.querySelector("#winner-image");
    if(input.startsWith("You win!")){
        playerScore++;
        winnerImage.src = "resources/player.png";
    }
    else if(input.startsWith("You lose!")){
        computerScore++;
        winnerImage.src = "resources/robot.png";
    }
    else{
        winnerImage.src = "resources/tie.png";
    }
}