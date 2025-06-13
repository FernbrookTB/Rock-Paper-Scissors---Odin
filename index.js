let playerScore=0
let computerScore=0
let roundCount = 0
const maxRounds = 5;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!'
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'Winner!'
        } else {
            return 'Damn, loser..'
        }
}

function handlePlayerChoice (playerSelection) {
    if (roundCount >= maxRounds) return;

    const computerSelection = getComputerChoice();
    const result = playRound (playerSelection, computerSelection);
    document.getElementById('result').textContent= `Round ${roundCount + 1}: You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
    
    
    
    if (result === 'Winner!') {
        playerScore++;
        roundCount++;
    } else if (result === 'Damn, loser..') {
        computerScore++;
        roundCount++;
    }

    
    
    document.getElementById('playerScore').textContent = `You: ${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;

    if (roundCount === maxRounds) {
        let finalMessage = '';
        if (playerScore > computerScore){
            finalMessage = 'You win the match!';
        } else if (playerScore < computerScore) {
            finalMessage = 'The Computer bested you.';
        } else {
            finalMessage = 'Its a tie!';
        }
        document.getElementById('result').textContent += `\n${finalMessage}`;
        document.getElementById('playAgain').style.display = 'flex';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById('playerScore').textContent = 'You: 0';
    document.getElementById('computerScore').textContent = 'Computer: 0';
    document.getElementById('result').textContent = 'Lets play!';
    document.getElementById('playAgain').style.display = 'none';
}



document.getElementById('rock').addEventListener('click', () => {
    handlePlayerChoice('rock')
});

document.getElementById('paper').addEventListener('click', () => {
    handlePlayerChoice('paper')
});

document.getElementById('scissors').addEventListener('click', () => {
    handlePlayerChoice('scissors')
});

document.getElementById('playAgain').addEventListener('click', resetGame);

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    document.getElementById('card-container').style.display = 'flex';
    document.getElementById('result').textContent = 'Lets play!';
});
