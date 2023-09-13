// Functions

//declaration
function nameOfFunction() {
    console.log("runnning a function");
}

// function call 
nameOfFunction();

// function expressions anynumos function 
let fun = function () {
    console.log("ex of function expression");
}
fun();

// passing values and parameter 
let invitation = function (name = "defaultName") {
    console.log(`welcome! ${name} `);
}
invitation("raj");
invitation();


// returning values
let ageCalculation = function (birhtyear, currentyear = 2023) {
    let age = currentyear - birhtyear;
    return age;
}
console.log(ageCalculation(2000, 2023));


// Arrow Functions fat arrow functions

let invite = name => `welcome ${name}`;
console.log(invite("raj"));




// passing Functions as an arguments ( higher order function example )

let upperCase = function (str) {
    return str.toUpperCase();
}
let lowerCase = function (str) {
    return str.toLowerCase();
}

let transform = function (str, fun) {
    return fun(str);
}
console.log(transform("raj", upperCase));


// function returning another function 
let compliment = function (msg) {
    return function (name) {
        console.log(`${msg}${name}`);
    }
}
console.log(compliment("YOu are a good coder ")("Raj"));


let complimented = compliment("you are a good coder");
console.log(complimented("Raj"));

// imediately invoked function expression
// Executed only once
(function() {
    console.log("this fnction will never run again");
})()

    // (function (name) {
    //     console.log("this fnction will never run again", name);
    // })(10);