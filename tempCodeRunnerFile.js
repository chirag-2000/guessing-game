let computerGuess;
let userGuess= []; //to show user guesses

const init =()=>{
    computerGuess = Math.round(Math.random());
    console.log(computerGuess);
}
init();