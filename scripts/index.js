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
    if(player === computer){
        console.log(`It's a tie! ${player} can't beat ${computer}.`);
    }
    else if(computer === "rock"){
        switch(player){
            case "paper":
                console.log(`You win! ${player} beats ${computer}.`);
                break;
            case "scissors":
                console.log(`You Lose! ${player} is inferior to ${computer}.`);
                break;
        }
    }
    else if(computer === "paper"){
        switch(player){
            case "scissors":
                console.log(`You win! ${player} beats ${computer}.`);
                break;
            case "rock":
                console.log(`You Lose! ${player} is inferior to ${computer}.`);
                break;
        }
    }
    else if(computer === "scissors"){
        switch(player){
            case "rock":
                console.log(`You win! ${player} beats ${computer}.`);
                break;
            case "paper":
                console.log(`You Lose! ${player} is inferior to ${computer}.`);
                break;
        }
    }

    console.log(`Player: ${player}`);
    console.log(`CPU: ${computer}`);
}

playRound(playerSelection,computerSelection);