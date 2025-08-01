
const choices=["rock","paper","scissor"]
const playerChoice=prompt("choose rock,paper,scissor")
console.log(playerChoice)

if(playerChoice){
    console.log(`You choose ${playerChoice}`)
}else{
    console.log('You cheated!')
}

const randomNumber=Math.floor(Math.random()*choices.length)
const computerChoice=choices[randomNumber]
console.log(`computer chooses ${computerChoice}`)

