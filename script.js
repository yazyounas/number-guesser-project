let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// creating function that genrate randome number 

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
console.log(generateTarget());
//create function that compare the closest target

let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }

}


// score increase by 1
let updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    }else if (winner === 'computer') {
        computerScore++
    }
}

let advanceRound = () => currentRoundNumber++;
   




     