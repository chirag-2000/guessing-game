let computerGuess;
let userGuess= []; //to show user guesses
let userGuessUpdate = document.getElementById('textOutput'); //to show result, clues
let userNumberUpdate= document.getElementById('inputBox');  //to make input box empty
let audio = new Audio('game.wav');
let audio1 = new Audio('victory.mp3');


const init =()=>{ //is called onload in html file
    computerGuess = Math.round(Math.random()*100);
    // console.log(computerGuess);
    //button is hidden will be shown after game ends
    document.getElementById('newGameButton').style.display = 'none'; 
    //second page is hidden 
    document.getElementById('gameArea').style.display = 'none';
}

const startGame=()=>{ //goes to second page
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('gameArea').style.display = 'contents';
}
//when game ends 
const startNewGame=()=>{
    document.getElementById('newGameButton').style.display = 'contents';//showng button
    userNumberUpdate.setAttribute('disabled',true); //disabling form

}

//reload the page
const newGame=()=>{
    audio.play(); 
    window.location.reload();
}

// const goBack = ()=>{
//     document.getElementById('welcomeScreen').style.display = 'contents';
//     document.getElementById('gameArea').style.display = 'none';
//     userGuess.values="";
    
// }



//main logic of app
const compareGuess = ()=>{ //get value from user
    
    const usserVal = +document.getElementById('inputBox').value;
    // console.log(usserVal);
    userGuess = [...userGuess,usserVal] //storing in array
    document.getElementById('guesses').innerHTML =userGuess;

    //to check maxguess
    if(userGuess.length<maxGuess){ //goes untill n-1 attemps in this is last attempt is in else
        //check value low or high 
        if(usserVal> computerGuess){
            
        userGuessUpdate.innerHTML =` Your Guess is High 😲`
        userNumberUpdate.value="";//to make input box empty
    }
    else if (usserVal< computerGuess){
        userGuessUpdate.innerHTML = `Your guess is low 😌`
        userNumberUpdate.value="";
    }
    else{
        audio1.play(); 
        userGuessUpdate.innerHTML = `It's correct 😀💥`
        userNumberUpdate.value="";
        startNewGame(); //start new game when he wins
    }
}
else{
    if(usserVal> computerGuess){
        userGuessUpdate.innerHTML =` You lost the correct number was ${computerGuess}`
        userNumberUpdate.value="";//to make input box empty
        //after user looses call this func (lower margin)
        startNewGame();
    }
    else if (usserVal< computerGuess){
        userGuessUpdate.innerHTML =` You lost the correct number was ${computerGuess}`
        userNumberUpdate.value="";
        startNewGame(); ////after user looses call this func (higher margin)
    }
    else{ //last attempt if answer is crct 
        audio1.play(); 
        userGuessUpdate.innerHTML = `It's correct 😀💥`
        userNumberUpdate.value="";
        startNewGame();////start new game when he wins in his last attempt
    }
}
    document.getElementById('attempts').innerHTML = userGuess.length;
}

const easyMode=()=>{
    audio.play(); 
    maxGuess =10;
    startGame();
};

const hardMode=()=>{
    audio.play(); 
    maxGuess =5;
    startGame();
};
