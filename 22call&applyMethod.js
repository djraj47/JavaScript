// call and apply method
"use strict"
let mainPlane = {
    airline: "Fly India",
    code: "F1",
    Booking: [],
    book: function (flightNum, name) {
        console.log(`${name} booked flight on ${this.airline} with the flight number ${this.code}${flightNum}`);
        this.Booking.push({ flight: `${this.airline}`, name: name, flightNum: `${this.code}` })
    }
}
mainPlane.book(453453, "raj")
console.log(mainPlane);

let childPlane = {
    airline: "Vistara",
    code: "CP7",
    Booking: [],
}

// call method 
let book = mainPlane.book;
book.call(childPlane, 564, "robin");

// apply method 

book.apply(childPlane, [456, "amit"]);

// bind method
function greet() {
    console.log(`welcome ${this.fristName} ${this.secondName} `);
}

let user = {
    fristName: "Raj",
    secondName: "kiran"
}
let greets = greet.bind(user);
greets();
