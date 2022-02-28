const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const secretNumber = Math.floor(Math.random()*(20 - 1)) + 1;
console.log(secretNumber);
const againButton = $('.top__again')
const numberGuessScreen = $('.bottom__guess input')
const numberGuessCheck = $('.bottom__guess button')
const hint = $('.hint') 
const scoreNumber = $('.score__number'); 
const highScoreNumber = $('.highscore__number');
const numberResult = $('.middle__number--secret')
let highScore = localStorage.getItem('High Score');

(function fillHighScore(){
    if(!localStorage.getItem('High Score')){
        highScore = '0';
    }
    let highScoreNumberText = highScoreNumber.innerText;
    highScoreNumberText = highScore;
    highScoreNumber.innerText = highScoreNumberText;
})()

againButton.onclick = () => {
    document.location.reload();
}
function createSecretNumber() {
    return Math.floor(Math.random()*(20 - 1)) + 1;
}
function countAttemp(){
    let scoreNumberText = scoreNumber.innerText;
    let scoreNumberNum = parseInt(scoreNumberText) + 1;
    scoreNumberText = scoreNumberNum.toString();
    scoreNumber.innerText = scoreNumberText;
    return scoreNumberNum;
}
function saveScore(data){
    localStorage.setItem('High Score', data);
}
function giveHint(text){
    let hintText = hint.innerText;
    hintText = text;
    hint.innerText = hintText; 
}
function showResult(){
    Object.assign(numberResult.style,{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        border: '5px solid var(--text-color)'
    })
    
    let numberResultText = numberResult.innerText;
    numberResultText = secretNumber;
    numberResult.innerText = numberResultText;
}
numberGuessCheck.onclick = () => {
    const numberGuess = parseInt(numberGuessScreen.value);
    if(numberGuessScreen.value == ""){
        alert('Please enter the number');
    }
    else {
        const achiveNumber = countAttemp();
        if(numberGuess === secretNumber){
            if(highScore == 0){
                saveScore(achiveNumber);
            }
            else if(achiveNumber < highScore){
                saveScore(achiveNumber);
            }
            giveHint('Exactly');
            showResult();

        }
        else{
            numberGuessScreen.value = null;
            numberGuessScreen.focus();
            if(numberGuess < secretNumber){
                giveHint('Too Low');
            }
            else{
                giveHint('Too High');

            }

        }
    }
        
}


