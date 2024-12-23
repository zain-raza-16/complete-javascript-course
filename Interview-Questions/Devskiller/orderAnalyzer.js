// Task Description
// You need to implement a function that calculates the average total order value for every weekday from a given list of orders. The function should return a map where the keys are the names of the weekdays and the values are the average order totals for each respective day.

// Inputs
// orders (array of objects):
// Each object represents an order and contains the following properties:
// id (number): A unique identifier for the order.
// date (string): The order date in ISO format (e.g., "2024-12-22T14:48:00.000Z").
// total (number): The total value of the order.
// Output
// A Map where:
// The key is the name of the weekday (e.g., "Monday", "Tuesday", etc.).
// The value is the average total value of all orders placed on that weekday, rounded to two decimal places.
// Example Input and Output
// Input

// const orders = [
//   { id: 1, date: '2024-12-22T14:48:00.000Z', total: 100.5 },
//   { id: 2, date: '2024-12-21T10:30:00.000Z', total: 200.0 },
//   { id: 3, date: '2024-12-21T18:15:00.000Z', total: 150.25 },
//   { id: 4, date: '2024-12-20T12:45:00.000Z', total: 300.0 },
//   { id: 5, date: '2024-12-22T09:00:00.000Z', total: 50.0 },
// ];

// Output
// Map(3) {
//   'Friday' => 300.0,
//   'Saturday' => 175.13,
//   'Sunday' => 75.25
// }

// Requirements
// Parse the date to extract the day of the week.
// Group orders by the day of the week.
// Calculate the average total value for each weekday.
// Round the average to two decimal places.
// Return the results in a Map.

const orders = [
  { id: 1, date: '2024-12-22T14:48:00.000Z', total: 100.5 },
  { id: 2, date: '2024-12-21T10:30:00.000Z', total: 200.0 },
  { id: 3, date: '2024-12-21T18:15:00.000Z', total: 150.25 },
  { id: 4, date: '2024-12-20T12:45:00.000Z', total: 300.0 },
  { id: 5, date: '2024-12-22T09:00:00.000Z', total: 50.0 },
];

const calculateAverageOrderValueByWeekday = function (orders) {

    //Transform the date in one format
    orders.forEach(order => {
        const date = new Date(order.date);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        order.day = weekday
    });

    const groupedByDay = orders.reduce((groupedByDay, order) => {
        if (!groupedByDay[order.day]) {
            groupedByDay[order.day] = []; // Initialize array for this weekday
        }
        groupedByDay[order.day].push(order.total); // Add order total to the array
        return groupedByDay;
    }, {});
    
    const averageByDay = {};
    for (const day in groupedByDay) {
        const totals = groupedByDay[day];
        console.log(totals)
        const average = totals.reduce((sum, total) => sum + total, 0) / totals.length;
        averageByDay[day] = average;
    }
    return averageByDay; 
  }

  console.log(calculateAverageOrderValueByWeekday(orders))