// Programming Task
// JavaScript | Office Game - Tic Tac Toe - Finish the Game
// You are tasked with completing a simplified version of the popular Tic Tac Toe game. The game is implemented in JavaScript and uses a 3x3 grid.

// Problem Statement
// Implement a function checkWinner that determines if there is a winner in the current state of the game. The function should:

// Accept a 2D array board representing the Tic Tac Toe grid. The board can contain:
// "X" for Player 1
// "O" for Player 2
// null for an empty cell

// Return:
// "X" if Player 1 wins,
// "O" if Player 2 wins,
// "Draw" if the board is full and no player has won,
// null if the game is still ongoing.

// Function Signature



// Inputs
// board (array): A 3x3 array representing the state of the game grid. Example:

// [
//     ["X", "O", "X"],
//     ["O", "X", null],
//     [null, "O", "X"]
// ]
// Output
// A string or null indicating the game's status:

// "X", "O", "Draw", or null.
// Example
// Input

// const board = [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["O", "X", "X"]
// ];

// console.log(checkWinner(board));
// Output
// "X"
// Explanation
// Player 1 ("X") has completed a diagonal from top-left to bottom-right.

// Requirements
// Check for a win condition (horizontal, vertical, or diagonal).
// Check if the board is full and return "Draw" if no winner exists.
// Return null if the game is ongoing and no winner has been determined yet.




const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

function checkWinner(board) {
    // Your implementation here
    const checkLine = (a, b, c) => a && a === b && b === c;

    // Check rows
    for (let row of board) {
        if (checkLine(row[0], row[1], row[2])) return row[0];
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (checkLine(board[0][i], board[1][i], board[2][i])) return board[0][i];
    }

    // Check diagonals
    if (checkLine(board[0][0], board[1][1], board[2][2])) return board[0][0];
    if (checkLine(board[0][2], board[1][1], board[2][0])) return board[0][2];

    // Check for draw
    if (board.flat().every(cell => cell)) return "Draw";

    // Game is still ongoing
    return null;
}

console.log(checkWinner(board))


// Code Gap 1: JavaScript | Spread Operator
// Complete the following code gap by using the spread operator to clone the players array and add a new player "New Player".


const players = ["Alice", "Bob"];
const updatedPlayers = [...players,"New Player"];

console.log(updatedPlayers);
// // Expected Output: ["Alice", "Bob", "New Player"]




// Code Gap 2: JavaScript | Modify Document Title
// Fill in the missing part of the code to update the document's title to "Tic Tac Toe - Game Over" when the game ends.


function endGame() {
    // Your code here
}
endGame();
// // The document's title should now be "Tic Tac Toe - Game Over"






// Code Gap 3: JavaScript | Event Propagation
// Complete the code to prevent a child element from triggering its parent element's click event.

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", (event) => {
    // Your code here
    console.log("Child clicked");
});