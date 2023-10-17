// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();
let day = today.getDay();
let daylsit = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
console.log("Today is " + daylsit[day]);

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;
console.log(`Current time is ${hour} ${prepand} : ${min} min : ${sec} sec `);
