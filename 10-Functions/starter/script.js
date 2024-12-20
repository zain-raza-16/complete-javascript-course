'use strict';


// DEFAULT PARAMETERS
// const Gamma = function(alpha = 2 , mega = 3, zero = 10){
//     console.log(alpha)
// console.log(mega)
// console.log(zero)
// }
// Gamma()
// **TRICK** Making the values with skipping the middle value  
// Gamma(20,undefined,40)

//Higher Order Function and First clas 

// const transform = function(str){
// const [first , ...others] = str.split('');
// return [first.toUpperCase(), ...others].join("")
// }

// console.log(transform('hiiiiii'))

//FUNCTIONS RETURNING FUNTIONS
// (greet)=>{
//     return function(name){
//         console.log(`${greet} ${name}`)
//     }
// }

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);


//****************Setting the this Keyword Manually in JavaScript***************

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
    
//     book(flightNumber, passengerName) {
//         console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, passengerName });
//       }

// }

// const Nabiha = {
//     airline: 'HP',
//     iataCode: 'NR',
//     bookings: [],
// }

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'Mike Smith');
// console.log(lufthansa.bookings);

// lufthansa.book.call(Nabiha,333, 'Angela');
// lufthansa.book.apply(Nabiha,[444, 'dearmond']);
// console.log(Nabiha.bookings);

// const NabihaBookings = lufthansa.book.bind(Nabiha)
// NabihaBookings(6766,'astoin')



// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// /*

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),


//     registerNewAnswer() {
//         const ans  = Number(prompt(`${this.question} \n ${this.options.join('\n')} `))

//         //Addition of Number
//         typeof ans === 'number' && ans > 0 && ans < this.options.length && this.answers[ans]++
//         console.log(this.answers)

//     },

//     displayResults (){

//     }


// }

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))


// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
    console.log('This will never run again');
  };
  runOnce();
  
  // IIFE
  (function () {
    console.log('This will never run again');
    const isPrivate = 23;
  })();
  
  // console.log(isPrivate);
  
  (() => console.log('This will ALSO never run again'))();
  
  {
    const isPrivate = 23;
    var notPrivate = 46;
  }
  // console.log(isPrivate);
  console.log(notPrivate);