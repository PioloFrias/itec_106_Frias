// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform the calculation
function calculate() {
    try {
        // Evaluate the expression in the display
        var result = eval(document.getElementById('display').value);

        // Display the result
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle any errors during calculation
        document.getElementById('display').value = 'Error';
    }
}