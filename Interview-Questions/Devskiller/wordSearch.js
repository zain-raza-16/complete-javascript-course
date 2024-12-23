// JavaScript | Word Search

// Implement a WordSearch class that initializes with a letterGrid (a 2D array of letters) and provides a find method to search for a given word in all eight possible directions (horizontally, vertically, and diagonally).

// Problem Statement
// Implement the constructor of the WordSearch class to initialize the letterGrid property.
// Implement the find method which searches for a word in the letterGrid. The method should:
// Return true if the word exists in the grid in any direction.
// Return false if the word does not exist.
// Function Signature
// javascript
// Copy code
class WordSearch {
    constructor(letterGrid) {
        // Your implementation here
    }

    find(word) {
        // Your implementation here
    }
}
// Inputs

// letterGrid (array): A 2D array of characters, representing the grid of letters.
// word (string): The word to search for in the grid.

// Output
// A boolean (true or false) indicating whether the word exists in the grid.
// Example
// Input

const grid = [
    ['C', 'A', 'T'],
    ['D', 'O', 'G'],
    ['P', 'I', 'G']
];
const wordSearch = new WordSearch(grid);

console.log(wordSearch.find("CAT")); // true (horizontal, top row)
console.log(wordSearch.find("DOG")); // true (horizontal, middle row)
console.log(wordSearch.find("TAC")); // false (reverse diagonal is not supported in this test)
console.log(wordSearch.find("DIG")); // false
// Output
// true
// true
// false
// false
// Requirements
// The find method must search for the word in the grid in the following directions:
// Left-to-right
// Top-to-bottom
// Diagonally (both top-left to bottom-right and top-right to bottom-left)
// Handle edge cases where the grid is empty or the word is longer than the grid dimensions.
// Code Gap 1: JavaScript | Spread Operator
// Description
// Complete the code gap by using the spread operator to merge two arrays.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = /* Your code here */ ;

console.log(mergedArray);
// Expected Output: [1, 2, 3, 4, 5, 6]

// Code Gap 2: JavaScript | Array Iteration
// Description
// Complete the code gap to filter out even numbers from the array and store them in a new array.


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = /* Your code here */ ;

console.log(evenNumbers);
// Expected Output: [2, 4, 6]
// Code Gap 3: JavaScript | Default Parameters
// Description
// Complete the function to use a default parameter for name and return a greeting.


function greet(name = /* Your code here */) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Expected Output: "Hello, Alice!"
console.log(greet()); // Expected Output: "Hello, Guest!"