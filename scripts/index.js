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
const playerSelection = "rock";

function playRound(player, computer){
    computer = getComputerChoice();
    player = prompt("What will you play this round?");
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
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for(let i = 0; i < 5; i++){
        result = playRound(playerSelection,computerSelection);
        console.log(result);
        if(result.startsWith("You win!")){
            playerScore++;
        }
        else if(result.startsWith("You lose!")){
            computerScore++;
        }
        console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`);
    }
    if(playerScore > computerScore){
        console.log("You won the best of 5");
    }
    else if(computerScore > playerScore){
        console.log("You lost the best of 5");
    }
    else{
        console.log("This best of 5 was a tie!");
    }
}

game();