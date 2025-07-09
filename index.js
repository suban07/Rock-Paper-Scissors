let playerdisplay = document.getElementById("player"); 
let computerdisplay = document.getElementById("computer"); 
let resultdisplay = document.getElementById("result"); 
let pdisplay = document.getElementById("pdisplay");
let cdisplay = document.getElementById("cdisplay");
let finalresult = document.getElementById("final");
let desclaimer = document.querySelector('.desclaimer');
let rules = document.querySelector('.Rules');

let playerscore = 0;
let computerscore = 0;
let count = 0;
let choices = ["rock", "paper", "scissor"];
let gameEnded = false; // Flag to prevent playing after round 5

function func(playerchoice) {
    if (gameEnded) {
        // Clear UI for new game
        playerdisplay.textContent = "";
        computerdisplay.textContent = "";
        resultdisplay.textContent = "";
        finalresult.textContent = "";
        finalresult.style.display = "none";
        resultdisplay.classList.remove("green", "red");

        // Reset all values
        playerscore = 0;
        computerscore = 0;
        count = 0;
        pdisplay.textContent = playerscore;
        cdisplay.textContent = computerscore;
        gameEnded = false; // allow game to restart

        // Continue to next click
        return;
    }

    let computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerchoice) {
        result = "IT'S A TIE";
    } else if (
        (playerchoice === "rock" && computerchoice === "scissor") ||
        (playerchoice === "paper" && computerchoice === "rock") ||
        (playerchoice === "scissor" && computerchoice === "paper")
    ) {
        result = "YOU WIN";
    } else {
        result = "YOU LOSE !";
    }

    count++;

    playerdisplay.textContent = playerchoice;
    computerdisplay.textContent = computerchoice;
    resultdisplay.textContent = `Round ${count}: ${result}`;
    resultdisplay.classList.remove("green", "red");

    switch (result) {
        case "YOU WIN":
            resultdisplay.classList.add("green");
            playerscore++;
            break;
        case "YOU LOSE !":
            resultdisplay.classList.add("red");
            computerscore++;
            break;
    }

    pdisplay.textContent = playerscore;
    cdisplay.textContent = computerscore;

    if (count === 5) {
        playagain(playerscore, computerscore);
        gameEnded = true;
    }
}

function playagain(playerscore, computerscore) {
    finalresult.style.display = "block";

    if (playerscore > computerscore) {
        finalresult.textContent = "You won🏆";
        finalresult.classList.remove('red');
        finalresult.classList.add('green');
    } else if (playerscore < computerscore) {
        finalresult.textContent = "You lose💀";
        finalresult.classList.remove('green');
        finalresult.classList.add('red');
    } else {
        finalresult.textContent = "Match Draw🤝";
        finalresult.classList.remove('green', 'red');
    }
}

function toggle() {
    rules.classList.toggle('show');
}
