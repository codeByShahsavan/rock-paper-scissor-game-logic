const choices = ["rock", "paper", "scissor"];
    let playerScore=0
    let computerScore=0
const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult=(result)=>{

   if(result==="player"){
    console.log("You win.")
    playerScore++
   }else if(result==="computer"){
      console.log("You lose!")
      computerScore++
   }else{
    console.log("It's a tie.")
   }
   console.log(`Your score:${playerScore}`)
   console.log(`computer score:${computerScore}`)
   console.log("................")

}
const play=()=>{
const playerChoice = prompt("choose rock,paper,scissor");

if (choices.indexOf(playerChoice?.toLocaleLowerCase()) !== -1) {
  console.log(`You choose ${playerChoice}`);
} else {
  console.log("You cheated!");
  return
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`computer chooses ${computerChoice}`);

const gameResult = checkWinner(playerChoice, computerChoice);
showResult(gameResult)
while(playerScore<5 && computerScore<5){

play()

}

}


play()