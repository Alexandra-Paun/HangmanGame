const wordList = ['chocolate', 'church', 'coconut', 'voodoo', 'temperature', 'training', 'beaver', 'bagpipe',
    'jogging', 'jelly', 'icebox', 'gossip', 'halloween', 'zipper', 'zombie', 'ivory', 'puppy', 'jackpot', 'holiday',
    'alphabet', 'programming', 'homework', 'computer', 'cake', 'bakery', 'pumpkin', 'candy'];

let word = wordList[Math.floor(Math.random() * wordList.length)];
let hiddenWord;
let remainedLetters = word.length;
let life = -1;
let foundLetter = 0;
let manFigure = document.getElementsByClassName("man-figure");

function createWord() {
    hiddenWord = new Array(word.length);
    let firstLetter = word[0], lastLetter = word[word.length - 1];
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == firstLetter) {
            hiddenWord[i] = firstLetter + " ";
        } else if (word[i] == lastLetter) {
            hiddenWord[i] = lastLetter + " ";
        } else {
            hiddenWord[i] = "_ ";
        }
    }
    document.getElementById("guessedLetters").innerHTML = hiddenWord.join(" ");
}

document.addEventListener('keydown', function (event) {
    foundLetter = 0;
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == event.key) {
            hiddenWord[i] = event.key + " ";
            foundLetter = 1;
        }
    }
    document.getElementById("guessedLetters").innerHTML = hiddenWord.join(" ");
    displayMan();
    checkLetters();
    checkLife();
});

function displayMan() {
    if (foundLetter == 0) {
        ++life;
        manFigure[life].style.display = "block";
    }
}

function checkLetters() {
    remainedLetters = 0;
    for (let i = 0; i < word.length; ++i) {
        if (hiddenWord[i] == "_ ") {
            ++remainedLetters;
        }
    }
}

function checkLife() {
    if (life == 5) {
        document.getElementById("winner").innerHTML = "YOU LOST!!!";
    }
    if (remainedLetters == 0) {
        document.getElementById("winner").innerHTML = "YOU WIN!!!";
    }
}

