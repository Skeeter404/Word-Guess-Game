

//create variables
var answers = ["conjuring", "halloween", "insidious", "it", "purge", "sinister", "strangers", "grudge", "scream"];
var targetWord = [];
var userGuess = "";
var wrongGuesses = [];
var underScores = [];
var guessesLeft = 7;
var winsDiv = 0;
var lossesDiv = 0;
var correctCounter = 0;
var guesses = [];


//choose random word from answer array
function setupgame () {
correctCounter = 0;
underScores = [];
targetWord = answers[Math.floor(Math.random() * answers.length)];
console.log(targetWord);
//create underscores based on length of chosen word

for (var i = 0; i < targetWord.length; i++) {
    underScores.push('_ ');
}


document.getElementById("guessesLeft").innerHTML = guessesLeft;
//push text to html
document.getElementById("underscores").textContent = underScores.join(" ");
}
//obtain users guess 
document.onkeypress = function (event) {
    userGuess = event.key;
    console.log(userGuess);

    if (guesses.indexOf(userGuess) === -1) {
        guesses.push(userGuess);
        document.getElementById("winOrLose").innerHTML = "";



        //check if guess matches a letter in word

        if (targetWord.indexOf(userGuess) > -1) {
            console.log("true");

            //if right push to fill underscores

            for (var i = 0; i < targetWord.length; i++) {

                if (targetWord[i] === userGuess) {
                    underScores[i] = userGuess;
                    document.getElementById("underscores").innerHTML = underScores.join(" ");
                    //console.log(underScores);
                    correctCounter++;
                    winLose();
                }
            }
        }
        //push guessed letter to "guesses" 
        else {
            wrongGuesses.push(userGuess);
            //console.log(wrongGuesses);
            guessesLeft--;
            winLose();
            document.getElementById("guessed").innerHTML = wrongGuesses;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
        }
    }

    else {
        document.getElementById("winOrLose").innerHTML = "You've already used that letter!";
    }

    function winLose() {
        if (correctCounter === targetWord.length) {
            document.getElementById("winningImage").src="./assets/images/" + targetWord + ".jpg";
            document.getElementById("winOrLose").innerHTML = "Winner Winner!";
            winsDiv++;
            document.getElementById("wins").innerHTML = winsDiv;
            setTimeout(function(){ resetgame();}, 2000);
        }

        else if (guessesLeft === 0) {
            document.getElementById("winOrLose").innerHTML = "Oops! You lose! Try again!";
            lossesDiv++;
            document.getElementById("losses").innerHTML = lossesDiv;
            setTimeout(function(){ resetgame();}, 2000);
        }



    }

}

function resetgame() {
    targetWord = answers[Math.floor(Math.random() * answers.length)];
    guessesLeft = 7;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    wrongGuesses = [];
    document.getElementById("guessed").innerHTML = wrongGuesses;
    guesses = [];
    setupgame();
}
//push correct image for targetWord upon winning
//reset
setupgame();


