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
    let result;
    result = playRound(playerSelection,computerSelection);
    
    console.log(result);

    if(result.startsWith("You win!")){
        playerScore++;
    }
    else if(result.startsWith("You lose!")){
        computerScore++;
    }
    
    let 
}