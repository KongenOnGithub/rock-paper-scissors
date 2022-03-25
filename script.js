function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)];
}

function userSelect() {
    let looping = true;
    let userSelection = prompt("Which one do you choose? rock paper or scissors");
    userSelection = userSelection.toLowerCase();
    if(userSelection==="rock" || userSelection==="paper" || userSelection==="scissors") {
        looping = false;
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

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector(".results");
const bod= document.querySelector('body');
const btn =document.querySelector('.new-game');

let userScore = 0;
let computerScore = 0;

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);
btn.addEventListener('click', newGame);

function playRock(){
    if (userScore>4||computerScore>4) {
        newGame();
    }
    playRound('rock', computerPlay());
}

function playPaper() {
    if (userScore>4||computerScore>4) {
        newGame();
    }
    playRound('paper', computerPlay());
}

function playScissors() {
    if (userScore>4||computerScore>4) {
        newGame();
    }
    playRound('scissors', computerPlay());
}

function newGame() {
    userScore = 0;
    computerScore= 0;
    results.innerHTML = '';
    bod.appendChild(results);
}

     
   


function playRound(userSelection, computerSelection) {
    if (userSelection==="rock") {
        if(computerSelection==="rock"){
          results.innerHTML +=`It's a tie! you both chose rock. The score is still ${userScore} to ${computerScore}<br>`
          bod.appendChild(results)
        return;
        }
        else if(computerSelection==="paper"){
            computerScore++;
            if (computerScore>4) {
                results.innerHTML += `You lose! paper beats rock. The computer is the winner with a score of ${userScore} to ${computerScore}<br>`;
            }else {
                results.innerHTML += `You lose! paper beats rock. The score is now ${userScore} to ${computerScore}<br>`;
            }
            bod.appendChild(results)
        return;
        }
        else if(computerSelection==="scissors"){
            userScore++;
            if (userScore>4) {
                results.innerHTML += `You win! rock beats scissors. You are the winner with a score of ${userScore} to ${computerScore}<br>`;
            }else {
                results.innerHTML += `You win! rock beats scissors. The score is now ${userScore} to ${computerScore}<br>`;
            }
            bod.appendChild(results)
        return;
        }
       
    }
    else if (userSelection==="paper") {
        if(computerSelection==="rock"){
            userScore++;
            if(userScore>4) {
                results.innerHTML +=`You win! paper beats rock. You are the winner with a score of ${userScore} to ${computerScore}<br>`
            }else {
                results.innerHTML +=`You win! paper beats rock. The score is now ${userScore} to ${computerScore}<br>`
            }
            
            bod.appendChild(results)
        return;
        }
        else if(computerSelection==="paper"){
            results.innerHTML +=`It's a tie! you both chose paper. The score is still ${userScore} to ${computerScore}<br>`
            bod.appendChild(results)
        return;
        }
        else if(computerSelection==="scissors"){
            computerScore++;
            if(computerScore>4) {
                results.innerHTML +=`You lose! scissors beat paper. The computer is the winner with a score of ${userScore} to ${computerScore}<br>`
            }else {
                results.innerHTML +=`You lose! scissors beat paper. The score is now ${userScore} to ${computerScore}<br>`
            }
            bod.appendChild(results)
        return;
        }
        
    }

    else if (userSelection==="scissors"){
        if(computerSelection==="rock"){
            computerScore++;
            if (computerScore>4) {
                results.innerHTML +=`You lose! rock beats scissors. The computer is the winner with a score of ${userScore} to ${computerScore}<br>`
            }
            else {
                results.innerHTML +=`You lose! rock beats scissors. The score is now ${userScore} to ${computerScore}<br>`
            }

            bod.appendChild(results)
        return;
        }
        else if(computerSelection==="paper"){
            userScore++;
            if (userScore>4) {
                results.innerHTML +=`You win! scissors beats paper. You are the winner with a score of ${userScore} to ${computerScore}<br>`
            }
            else {
                results.innerHTML +=`You win! scissors beats paper. The score is now ${userScore} to ${computerScore}<br>`
            }
            
            bod.appendChild(results)
        return;
        }
        else if(computerSelection==="scissors"){
            results.innerHTML +=`It's a tie! you both chose scissors. The score is still ${userScore} to ${computerScore}<br>`
            bod.appendChild(results)
        return;
        }
        
    }


}

// function game() {
    // let userScore = 0;
    // let computerScore=0;
// 
    // for (let i=0; i<5; i++){
        // let userChoice = userSelect();
        // let computerChoice = computerPlay();
        // let result = playRound(userChoice, computerChoice)
        // console.log(result);
        // if(result.substring(0, 8)==="You win!") {
            // userScore += 1;
        // }
        // else if(result.substring(0,9)==="You lose!") {
            // computerScore += 1;
        // }
        // 
    // }
// 
    // if(userScore>computerScore) {
        // console.log(`You won the best of five with a score of ${userScore} to ${computerScore}`);
    // }
    // else if(computerScore>userScore) {
        // console.log(`You lost the best of five with a score of ${userScore} to ${computerScore}`);
    // }
// 
    // else {
        // console.log(`The best of five ended in a tie with a score of ${userScore} to ${computerScore}`);
    // }
// }