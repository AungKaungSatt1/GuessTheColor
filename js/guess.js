var colors = [];
var pickedColor;
var numSquares = 6;

var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("displayColor");
var textDisplay = document.getElementById("displayText");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

function gameFunction() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        textDisplay.textContent = "Correct";
        resetButton.textContent = "Play again!";
        changeColor(pickedColor);
    } else {
        this.style.backgroundColor = "#232323";
        textDisplay.textContent = "Try Again";
        clickCount++;
        console.log(clickCount);
    }
}

init();

function init() {
    colorDisplay.textContent = pickedColor;
    resetButton.onclick = () => reset();
    playGame();
    setupMode();
    reset();
}

function playGame() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", gameFunction);
    }
}

function setupMode() {
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            for (var i = 0; i < modeButton.length; i++) {
                modeButton[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset() {
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#2C8E99";
    resetButton.textContent = "New Colors";
    textDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr;
}

function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
