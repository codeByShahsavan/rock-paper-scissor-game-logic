
const choices=["rock","paper","scissor"]
const playerChoice=prompt("choose rock,paper,scissor")

if(playerChoice){
    console.log(`You choose ${playerChoice}`)
}else{
    console.log('You cheated!')
}

const randomNumber=Math.floor(Math.random()*choices.length)
const computerChoice=choices[randomNumber]
console.log(`computer chooses ${computerChoice}`)

if(playerChoice===computerChoice){
    console.log("It's a tie.")
}else if(playerChoice==="rock"){
      if(computerChoice==="scissors"){
        console.log("You win.")
      }else{
        console.log("You lose!")
      }
}else if(playerChoice==="paper"){
          if(computerChoice==="rock"){
        console.log("You win.")
      }else{
        console.log("You lose!")
      }
}
else{
        if(computerChoice==="paper"){
        console.log("You win.")
      }else{
        console.log("You lose!")
      }
}