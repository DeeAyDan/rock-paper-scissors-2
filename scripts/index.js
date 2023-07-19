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