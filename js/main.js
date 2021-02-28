//사용 변수
const GAME_TIME = 2;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let checkInterval;
let words = [];

const wordInput = document.querySelector('.word-input');

const wordDisplay = document.querySelector('.word-display');

const scoreDisplay = document.querySelector('.score');

const timeDisplay = document.querySelector('.time');

const button = document.querySelector('.button');


init();

function init() {
    getWord();
    wordInput.addEventListener('input', checkMatch);
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        buttonChange("게임 종료");
        clearInterval(checkInterval);
    }
}

// 단어 불러오기
function getWord() {
    words = ['Hello', 'Banana', 'Apple', 'Cherry'];
    buttonChange('게임시작');
}

function checkMatch () {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        score++;
        scoreDisplay.innerText = score;
        wordInput.value = "";
    }
}

function run() {
    isPlaying = true;
    time = GAME_TIME;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
}

function countDown() {
    time > 0 ? time-- : isPlaying = false;
    if (!isPlaying) {
        clearInterval(timeInterval);
    }

    timeDisplay.innerText = time;
}

function buttonChange(text) {
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}