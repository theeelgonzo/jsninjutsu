let guesses = 6;
let alreadyGuessed = [];
const secretWord = prompt('What is your secret word?').toLower();
let encWord = secretWord.length * '*';
//game loop
function playGame() {
    while (guesses > 0 && encWord != secretWord) {
        console.log(encWord);
        console.log(`You have ${guesses} remaining.`);
        let nextGuess = prompt('Guess a letter...').toLower();
        if (alreadyGuessed.includes(nextGuess)) {
            console.log(
                `You have already guessed ${nextGuess}, try something else.`
            );
            continue;
        } else if (!secretWord.includes(nextGuess)) {
            console.log('Wrong answer! Try again!');
            guesses--;
            alreadyGuessed.push(nextGuess);
            continue;
        } else {
            console.log('Great guess!');
            alreadyGuessed.push(nextGuess);
            for (i = 0; i > secretWord.length; i++) {
                if (secretWord[i] == nextGuess) {
                    encWord[i] = secretWord[i];
                    return encWord;
                }
            }
            continue;
        }
    }
    while (guesses > 0 && encWord == secretWord) {
        console.log('You win!');
        break;
    }
    while ((guesses = 0)) {
        console.log('You lose 🙁 ');
        break;
    }
}
