// variables
const GameOverScore = 3;
let score1 = 0;
let score2 = 0;


const newGame = document.querySelector('.new-game');
const player1Score = document.querySelector('.player1-score');
const player2Score = document.querySelector('.player2-score');
const player1Choice = document.querySelector('.choice-one');
const player2Choice = document.querySelector('.choice-two');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const next = document.querySelector('.next');

const outcome = document.querySelector('.outcome');
const outcomeResults = document.querySelector('.outcome-results');


const reset = () => {
    player1Choice.value = "";
    player2Choice.value = "";
    player1Score.textContent = '0';
    player2Score.textContent = '0';

    score1 = 0;
    score2 = 0;

    outcome.style.display = 'none';
    outcomeResults.textContent = '';

}

const setChoice = (choice) => {
    player1Choice.value = choice;
}

const generateChoice2 = () => {
    let temp = Math.random();
    if (temp <= 0.333){
        return 'rock';
    }else if (temp <= 0.666){
        return 'paper';
    }else{
        return 'scissors';
    }
}

const nextCall = () => {
    // generate player2 choice
        let choice2 = generateChoice2();
        player2Choice.value = choice2;

    // call game logic
    gameLogic();

    // reset choices
    setTimeout(() => {
        resetChoices();
        outcome.style.display = 'none';
        outcomeResults.textContent = '';
        
    }, 3000);

}

//game logic
const gameLogic = () => {
    let player1 = player1Choice.value;
    let player2 = player2Choice.value;
    let winner;

    if (player1 == player2){
        winner = 'draw';
    }else if (player1 == 'rock' && player2 == 'scissors'){
        winner = 1;
    }else if (player1 == 'rock' && player2 == 'paper'){
        winner = 2;
    }else if (player1 == 'paper' && player2 == 'rock'){
        winner = 1;
    }else if (player1 == 'paper' && player2 == 'scissors'){
        winner = 2;
    }else if (player1 == 'scissors' && player2 == 'paper'){
        winner = 1;
    }else if (player1 == 'scissors' && player2 == 'rock'){
        winner = 2;
    }

    outcome.style.display = 'block';
    


    if (winner == 1){
        score1++;
        player1Score.textContent = score1;
        outcomeResults.textContent = "WIN";
    }else if (winner == 2){
        score2++;
        player2Score.textContent = score2;
        outcomeResults.textContent = "LOSE";
    }else{
        outcomeResults.textContent = 'DRAW';
    }
}

//reset choices 
const resetChoices = () => {
    player1Choice.value = '';
    player2Choice.value = '';
}

//new game functionality
newGame.addEventListener('click', reset);

//event listeners for player1 choices
rock.addEventListener('click', () => setChoice('rock'));
paper.addEventListener('click', () => setChoice('paper'));
scissors.addEventListener('click', () => setChoice('scissors'));

// event listener for next button
next.addEventListener('click', nextCall);


// play till total score == 3

// while (score1 + score2 < GameOverScore){
//     // game keeps going

// }

