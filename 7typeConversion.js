// Type conversion
let stringType = "45";
console.log(stringType, typeof (stringType));

// 1. Number method 
// passing string must be numeric value
let numberType = Number(stringType);
console.log(numberType, typeof (numberType));

// 2. String method 
let stringType1 = String(numberType);
console.log(stringType1, typeof (stringType1));

// Boolean mehtod 

let age = "34";  // empty string always print false
let booleanValueOfAge = Boolean(age);
console.log("boolean value of age is ",booleanValueOfAge);



