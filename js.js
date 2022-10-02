function getComputerChoice(){
  let list = [ "rock", "paper", "scissor" ];
        let num =  Math.floor(Math.random()*list.length);
        return list[num];

}

function playRound(playerSelection) {
    // your code here!
        computerSelection = getComputerChoice();

    if((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")) {
        playerScore++;
        round++
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + comScore)
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "rock")){
        comScore++;
        round++
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + comScore);
    }
    else
    {
        result = ("It is a tie!!!"
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + comScore)
    }
    checkScore(round);
    document.getElementById('result').innerHTML = result
    return
}

function checkScore(rounds) {
    if(playerScore >= 3 && rounds == 5){
        round = 0;
        playerScore = 0;
        comScore = 0;
        result += '<br><br>You won the game! Reload the page to play again'
    }
    if(comScore>= 3 && rounds == 5){
        round = 0;
        playerScore = 0;
        comScore = 0;
        result += '<br><br>Defeat.  Reload the page to play again'

    }

}
let result = "";
let playerScore = 0;
let comScore = 0;
let computerSelection = "";
let round = 0;
const buttons = document.querySelectorAll('input');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

