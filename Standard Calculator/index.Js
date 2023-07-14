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
  var dispalyValue = document.getElementById("d").value;
  var squareRoot = Math.sqrt(dispalyValue);
  updateDisplay(squareRoot);
}

function calculatePercent() {
  var dispalyValue = document.getElementById("display").value;
  var result = dispalyValue * 100;
  updateDisplay(result);
}

// Function to shoe more option to choose which calculator
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

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
//     "Backspace": "btn-backSpace"
//     // Add more key mappings as needed
//   };

//   // Get the corresponding button IDs based on the pressed key
//   var buttonIds = keyMappings[key];

//   // Trigger the button clicks if valid button IDs are found
//   if (buttonIds) {
//     if (Array.isArray(buttonIds)) {
//       // Multiple button IDs, trigger clicks for each
//       buttonIds.forEach(function(buttonId) {
//         var button = document.getElementById(buttonId);
//         if (button) {
//           button.click();
//         }
//       });
//     } else {
//       // Single button ID, trigger click
//       var button = document.getElementById(buttonIds);
//       if (button) {
//         button.click();
//       }
//     }
//   }
// });
