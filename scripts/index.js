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
const playerSelection = "rOcK".toLowerCase();

function playRound(player, computer){
    computer = getComputerChoice();
    if(computer === "rock"){
        switch(player){
            case "paper":
                return `You win! ${player} beats ${computer}.`;
            case "scissors":
                return `You Lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
    else if(computer === "paper"){
        switch(player){
            case "scissors":
                return `You win! ${player} beats ${computer}.`;
            case "rock":
                return `You Lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
    else if(computer === "scissors"){
        switch(player){
            case "rock":
                return `You win! ${player} beats ${computer}.`;
            case "paper":
                return `You Lose! ${player} is inferior to ${computer}.`;
            default:
                return `It's a tie! ${player} can't beat ${computer}.`;
        }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();