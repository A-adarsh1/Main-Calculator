// Function to update the calculator display


function updateDisplay(value) {
  document.getElementById("display").value = value;
}

// Function to perform mathematical operations
function math(operation) {
  var displayValue = document.getElementById("display").value;
  displayValue += operation;
  updateDisplay(displayValue);
}

// Function to clear the calculator display
function c(value) {
  updateDisplay(value);
}

// Function to remove the last character from the display
function back() {
  var displayValue = document.getElementById("display").value;
  displayValue = displayValue.slice(0, -1);
  updateDisplay(displayValue);
}

// Function to evaluate the mathematical expression
function e() {
  var displayValue = document.getElementById("display").value;
  var result = eval(displayValue);
  updateDisplay(result);
}

function calculateSquareRoot() {
  var dispalyValue = document.getElementById("display").value;
  var squareRoot = Math.sqrt(dispalyValue);
updateDisplay(squareRoot);
}

function calculatePercent() {
  var dispalyValue = document.getElementById("display").value;
  var result = (dispalyValue) * 100;
  updateDisplay(result);
}

function calculateCubeRoot() {
  var displayValue = document.getElementById("display").value;
  var CubeRoot = Math.cbrt(displayValue);
  updateDisplay(CubeRoot);
}
function calculateSquare() {
  var displayValue = document.getElementById("display").value;
  var Square = Math.pow(displayValue, 2);
  updateDisplay(Square);
}

function calculateCube() {
  var displayValue = document.getElementById("display").value;
  var Cube = Math.pow(displayValue, 3);
  updateDisplay(Cube);
}

function calculatePowerNegativeOne() {
  var displayValue = document.getElementById("display").value;
  var negativePower = Math.pow(displayValue, -1);
  updateDisplay(negativePower);

}

function calaculateExponentialNotation() {
  var displayValue = document.getElementById("display").value;
  var tenToThePower = Math.pow(displayValue, 10);
  updateDisplay(tenToThePower);
  
}

function calculateSin() {
  var angleInput = document.getElementById("display");
  var angleInDegrees = parseFloat(angleInput.value);

  var angleInRadians = angleInDegrees * (Math.PI / 180);
  var sinValue = Math.sin(angleInRadians);
  updateDisplay(sinValue);
}


function calculateCos() {
  var angleInput = document.getElementById("display");
  var angleInDegrees = parseFloat(angleInput.value);

  var angleInRadians = angleInDegrees * (Math.PI / 180);
  var cosValue = Math.cos(angleInRadians);
  updateDisplay(cosValue);
}



function calculateTan() {
  var angleInput = document.getElementById("display");
  var angleInDegrees = parseFloat(angleInput.value);

  var angleInRadians = angleInDegrees * (Math.PI / 180);
  var tanValue = Math.tan(angleInRadians);
  updateDisplay(tanValue);
}


function calculateGravity() {
  var result = 9.8;
  updateDisplay(result);
}

function calculateE() {
  var result = 2.71828182846;
  updateDisplay(result);
}

function calculateFactorial() {
  var i, num, f;
        f = 1
        num = display.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        display.value = f;
}



function calculateLog() {
  var displayValue = document.getElementById("display").value;
  var Log = Math.log(displayValue);
  updateDisplay(Log);
}


function openBracket() {
  var inputField = document.getElementById("display");
  var cursorPosition = inputField.selectionStart;
  var currentValue = inputField.value;

  var newValue = currentValue.substring(0, cursorPosition) + "(" + currentValue.substring(cursorPosition);
  
  // Update the input field with the new value
  inputField.value = newValue;
  
  // Move the cursor after the newly added bracket
  inputField.selectionStart = cursorPosition + 1;
  inputField.selectionEnd = cursorPosition + 1;
  
  // Focus on the input field to ensure it is active for further input
  inputField.focus();
}

function closeBracket() {
  var input = document.getElementById("display");
  input.value += ")";
}

function calculatePI() {
  var result = 3.14159265359 ;
  updateDisplay(result);
}




// display the value in fraction
function convertToFraction() {
  var display = document.getElementById("display");
  var decimalValue = parseFloat(display.value);

  // Use the Fraction object from the Fraction.js library
  var fraction = new Fraction(decimalValue);
  var fractionValue = fraction.toFraction(true);

  display.value = fractionValue;
}


// JS code for using keyboard for clicking

// document.addEventListener("keydown", function(event) {
//   var key = event.key;

//   // Define key mappings and corresponding button IDs
//   var keyMappings = {
//     "1": "btn-1",
//     "2": "btn-2",
//     "3": "btn-3",
//     "4": "btn-4",
//     "5": "btn-5",
//     "6": "btn-6",
//     "7": "btn-7",
//     "8": "btn-8",
//     "9": "btn-9",
//     "0": "btn-0",
//     ".": "btn-dot",
//     "+": "btn-plus",
//     "-": "btn-minus",
//     "*": "btn-multiply",
//     "/": "btn-divide",
//     "Enter": "btn-equal",
//     "Backspace": "btn-backSpace",
//     "Delete": "btn-backspace"
//     // Add more key mappings as needed
//   };

//   // Get the corresponding button ID based on the pressed key
//   var buttonId = keyMappings[key];

//   // Trigger the button click if a valid button ID is found
//   if (buttonId) {
//     var button = document.getElementById(buttonId);
//     if (button) {
//       button.click();
//     }
//   }
// });



// Function to shoe more option to choose which calculator
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});





