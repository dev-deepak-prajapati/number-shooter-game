const timer = document.querySelector('#timer');
const target = document.querySelector('#target');
const score = document.querySelector('#score');
const numberList = document.querySelector('#numberList');

let time = 10;
let timerInterval = null; // Store the interval ID

function randomValue() {
    return Math.ceil(Math.random() * 10);
}

function setTimer() {
    time = 10;
    timer.textContent = time;
}

function changeTimer() {
    clearInterval(timerInterval); // Clear any existing interval before starting a new one
    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            endGame();
            return;
        }
        time--;
        timer.textContent = time;
    }, 1000);
}

function updateScore() {
    let scoreValue = Number(score.textContent);
    scoreValue += 10;
    score.textContent = scoreValue;
}

function renderCircleValue() {

    target.textContent = randomValue();

    numberList.innerHTML = '';
    for (let i = 1; i <= 25; i++) {
        const divEle = document.createElement('div');
        divEle.className = 'circle';
        divEle.innerText = randomValue();
        numberList.append(divEle);
    }
}

function endGame() {
    document.querySelector('header').style.display = 'none';
    numberList.innerHTML = `
        <div class="stop">
            <h2>Game Over</h2>
            <p>Your Score : ${score.textContent}</p>
            <button onclick="startGame()">restart</button>
        </div>
    `;
}

function startGame() {
    document.querySelector('header').style.display = 'flex';

    setTimer();
    score.textContent = 0;
    renderCircleValue();
    changeTimer(); // Restart the timer loop when the game starts/restarts
}

numberList.addEventListener('click', (e) => {
    const eventTarget = e.target;
    if (eventTarget.closest('.circle')) {
        const pressValue = eventTarget.textContent;
        const targetValue = target.textContent;

        if (targetValue === pressValue) {
            updateScore();
            renderCircleValue();
        }
    }
});

// Start the game for the first time
startGame();
