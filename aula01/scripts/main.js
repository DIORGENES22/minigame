const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),

    },
    values: {

        gameVelocity: 150,
        hitPosition: 0,
        result: 0,
        currentTime: 30,


    },
    action: {
        timerId: setInterval(randomSquare, 500),
        countDownTimerId: setInterval(countDown, 1000),

    }
};



function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime

    if (state.values.currentTime <= 0) {
        clearInterval(state.action.countDownTimerId);
        clearInterval(state.action.timerId);
        alert("Game over!! sua pontuação foi: " + state.values.result);
    }
}


function playSound() {
    let audio = new Audio("./aula01/audios/gta-v-notification");
    audio.volume = 0.2;
    audio.play();
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}



function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();

            }
        })
    });



}

function initialize() {


    addListenerHitBox();
}



initialize();
