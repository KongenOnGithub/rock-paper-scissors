function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)];
}

function userSelect() {
    let looping = true;
    let userSelection = prompt("Which one do you choose? rock paper or scissors");
    userSelection = userSelection.toLowerCase();
    console.log(userSelection);
    console.log(looping);
    if(userSelection==="rock" || userSelection==="paper" || userSelection==="scissors") {
        looping = false;
        console.log(looping);
    }

    while(looping===true){
        userSelection = prompt("Try again, remember you can only choose between rock paper or scissors");
        userSelection = userSelection.toLowerCase();
        if (userSelection==="rock" || userSelection==="paper" || userSelection==="scissors") {
            looping = false;
        }
    }

    return userSelection;

}

     
   


function playRound(userSelection, computerSelection) {
    if (userSelection==="rock") {
        if(computerSelection==="rock"){
        return "It's a tie! you both chose rock";
        }
        else if(computerSelection==="paper"){
        return "You lose! paper beats rock";
        }
        else if(computerSelection==="scissors"){
        return "You win! rock beats scissors";
        }
        else {
        return "i think something went wrong"
        }
    }
    else if (userSelection==="paper") {
        if(computerSelection==="rock"){
        return "You win! paper beats rock";
        }
        else if(computerSelection==="paper"){
        return "It's a tie! you both chose paper";
        }
        else if(computerSelection==="scissors"){
        return "You lose! scissors beat paper";
        }
        else {
        return "i think something went wrong"
        }
    }

    else if (userSelection==="scissors"){
        if(computerSelection==="rock"){
        return "You lose! rock beats scissors";
        }
        else if(computerSelection==="paper"){
        return "You win! scissors beats paper";
        }
        else if(computerSelection==="scissors"){
        return "It's a tie! you both chose scissors";
        }
        else {
        return "i think something went wrong"
        }
    }


}