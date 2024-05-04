// Prompt the user to enter the number of terms
let terms;
do {
    terms = parseInt(prompt("Enter the number of terms in the sequence: "));
    if (isNaN(terms) || terms < 1 || terms >= 100) {
        console.log("Please enter a valid integer number greater than 0 and less than 100.");
    }
} while (isNaN(terms) || terms < 1 || terms >= 100);

// Initialize variables to store the current and previous Fibonacci numbers
let current = 0;
let previous = 1;
// Initialize a variable to store the Fibonacci series as a string
let fibonacciSeries = '';
// Iterate to generate the Fibonacci series
for (let i = 1; i <= terms; i++) {
    fibonacciSeries += current + ' ';
    const next = current + previous;
    current = previous;
    previous = next;
}
// Output the Fibonacci series
console.log(`Fibonacci series: ${fibonacciSeries}`);
