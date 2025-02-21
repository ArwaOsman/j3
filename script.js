let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = "Error";
        currentInput = "";
    }
}