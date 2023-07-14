document.addEventListener("keydown", function(event) {
 var key = event.key;

 // Define key mappings and corresponding button IDs
 var keyMappings = {
   "1": "btn-1",
   "2": "btn-2",
   "3": "btn-3",
   "4": "btn-4",
   "5": "btn-5",
   "6": "btn-6",
   "7": "btn-7",
   "8": "btn-8",
   "9": "btn-9",
   "0": "btn-0",
   ".": "btn-dot",
   "+": "btn-plus",
   "-": "btn-minus",
   "*": "btn-multiply",
   "/": "btn-divide",
   "Enter": "btn-equal",
   "Backspace": "btn-backSpace",
   "Delete": "btn-backspace"
   // Add more key mappings as needed
 };

 // Get the corresponding button ID based on the pressed key
 var buttonId = keyMappings[key];

 // Trigger the button click if a valid button ID is found
 if (buttonId) {
   var button = document.getElementById(buttonId);
   if (button) {
     button.click();
   }
 }
});