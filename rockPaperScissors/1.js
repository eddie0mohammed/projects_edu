const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
}

const getComputerChoice = () => {
    let temp = Math.random();

    if (temp < 0.34){
        return 'rock';
    }else if (temp <= 0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

const getWinner = (playerChoice, computer) => {
    if (playerChoice === computer){
        return 'draw';
    }else if (playerChoice === 'rock' && computer === 'paper'){
        return 'computer';
    }else if (playerChoice === 'rock' && computer === 'scissors'){
        return 'player';   
    }else if (playerChoice === 'paper' && computer === 'rock'){
        return 'player';
    }else if (playerChoice === 'paper' && computer === 'scissors'){
        return 'computer';
    }else if (playerChoice === 'scissors' && computer === 'rock'){
        return 'computer';
    }else if (playerChoice === 'scissors' && computer === 'paper'){
        return 'player';
    }
}

//show winner

const showWinner = (winner, computerChoice) => {
    if (winner === 'player'){
        //inc player score
        scoreboard.player++;
        //show modal result
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else if (winner === 'computer'){
        //inc computer score
        scoreboard.computer++;
        //show modal result
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else{ //draw
        //show modal result
        result.innerHTML = `
            <h1>It's a DRAW</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    //show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
    
}

//play game
function play(e){
    restart.style.display = 'inline-block';
    modal.style.display = 'none';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    showWinner(winner, computerChoice);


}

//restart game
const restartGame = () => {
    restart.style.display = 'none';
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
}

//clear modal
function clearModal(e){
    // console.log(e.target);
    if (e.target === modal){
        modal.style.display = 'none';
    }

}

//event listeners

choices.forEach(choice => {
    choice.addEventListener('click', play);
});

restart.addEventListener('click', restartGame);

window.addEventListener('click', clearModal);