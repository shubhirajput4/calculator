let input = document.getElementById('display'); // Get the input display
let buttons = document.querySelectorAll('button'); // Get all buttons
let string = ""; // To store the input as a string
let arr = Array.from(buttons); // Convert the buttons NodeList to an array

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Handle the '=' button (evaluate the string)
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string; // Display the result
            } catch {
                input.value = "Error"; // Handle invalid input
                string = ""; // Clear the string
            }
        }
        // Handle the 'AC' button (clear everything)
        else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = "0"; // Reset display to 0
        }
        // Handle the 'DEL' button (delete the last character)
        else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1); // Remove the last character
            input.value = string || "0"; // Show 0 if the string is empty
        }
        // Handle the '%' button (convert percentage)
        else if (e.target.innerHTML === '%') {
            if (string.length > 0) {
                string = `${string}/100`; // Add "/100" to the expression
                input.value = eval(string); // Show the calculated percentage
            }
        }
        // Handle other buttons (numbers, operators, etc.)
        else {
            if (input.value === "0" && !isNaN(e.target.innerHTML)) {
                // Replace 0 with the number if starting a new input
                string = e.target.innerHTML;
            } else {
                string += e.target.innerHTML; // Append the input to the string
            }
            input.value = string; // Update the display
        }
    });
});
