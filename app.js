const choices = ["rock", "paper", "scissor"];

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

const play=()=>{
const playerChoice = prompt("choose rock,paper,scissor");

if (choices.indexOf(playerChoice.toLocaleLowerCase()) !== -1) {
  console.log(`You choose ${playerChoice}`);
} else {
  console.log("You cheated!");
  return
}

const randomNumber = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNumber];
console.log(`computer chooses ${computerChoice}`);

const result = checkWinner(playerChoice, computerChoice);
console.log(result);

}


play()