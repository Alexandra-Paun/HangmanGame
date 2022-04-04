const wordList = ['chocolate', 'church', 'coconut', 'voodoo', 'temperature', 'training', 'beaver', 'bagpipe',
    'jogging', 'jelly', 'icebox', 'gossip', 'halloween', 'zipper', 'zombie', 'ivory', 'puppy', 'jackpot', 'holiday',
    'alphabet', 'programming', 'homework', 'computer', 'cake', 'bakery', 'pumpkin', 'candy'];

let word = wordList[Math.floor(Math.random() * wordList.length)];
let hiddenWord;
let remainedLetters = word.length;
let life = 6;
let foundLetter = 0;

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
        --life;
    }
    if (life == 5) {
        document.getElementById("id1").style.display = "block";
    } else if (life == 4) {
        document.getElementById("id2").style.display = "block";
    } else if (life == 3) {
        document.getElementById("id3").style.display = "block";
    } else if (life == 2) {
        document.getElementById("id4").style.display = "block";
    } else if (life == 1) {
        document.getElementById("id5").style.display = "block";
    } else if (life == 0) {
        document.getElementById("id6").style.display = "block";
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
    if (life == 0) {
        document.getElementById("winner").innerHTML = "YOU LOST!!!";
    }
    if (remainedLetters == 0) {
        document.getElementById("winner").innerHTML = "YOU WIN!!!";
    }
}

