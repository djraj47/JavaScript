// Strings 
// strings does not mutate original array
// Strings are Immutable



console.log("Hello Coders")
let firstName = "raj"
let secondName = "Kiran"
console.log(firstName, secondName); // prints space automatically between variables

// String concatination 

// --> method 1 using + operator
let fullnames = firstName + " " + secondName // 
console.log(fullnames);


// --> method 2 using template literal
let fullname = `My name is ${firstName} ${secondName}`;
console.log(fullname);


// getting string character
console.log(firstName[2]);

// String Methods

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

console.log(firstName.indexOf("r")); // returns -1 if any char is not present

// trim method

let hobbies = "    eat sleep repeat repeat   "
console.log(hobbies);

let result = hobbies.trim();
console.log(result);

// indexOf
console.log(result.indexOf("sleep"));

// lastIndexOf
console.log(hobbies.lastIndexOf("repeat"));  //last occurence of the charater  & case sensetive

// includes method
console.log(result.includes("eat")); // shows true and false if character is present

// slice method
console.log(fullname.slice(0, 4)); // Excludes last index (0-3)

// split method
let favColors = "Brown Blue Black Grey";
let arrColors = favColors.split(' ');  // converts string into array
console.log(arrColors);

// at method 
let name1 = "larry";
console.log(name1.at(-3));












