// Arrays 

let dishes = ["biryani", "muttonkorma", "murgmuslam", "chikenlabadar", "tandaykabab"];
console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);
console.log(dishes[3]);
console.log(dishes[4]);

// modify the array

dishes[0] = "pulao";
console.log(dishes);

// --> Array methods

// Join method 
console.log(dishes.join(","));

//indexOf 
console.log(dishes.indexOf("biryani")); // case sensetive

// concat method
let newDishes = ["rasgulla", "barfi", "rasmalai", "kajukatli"]
console.log(dishes.concat(newDishes));

//lenght Property 
console.log(dishes.length);

//push method 
console.log(newDishes.push("panipuri"));  // return the new lenght of the array 

//pop method
console.log(newDishes.pop());  // return the pop element


// forEach method of Array

let dishes1 = ["apple", "mango", "banana", "lichi"];

dishes1.forEach(function (name) {
    console.log(name);
});


// Objects inside array 

let blocklist = [{ userName: "Raj", resaon: "abusive" }, { userName: "Robin", resaon: "copyright" }];
for (let i = 0; i < blocklist.length; i++) {
    console.log(blocklist[i].userName);
}