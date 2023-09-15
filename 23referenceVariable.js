// obejct/array how reference are passed to variable

let arr = [1, 2, 3, 4, 5,];
let getRef = arr;

getRef[5] = 7;
// getRef.shift()

console.log("Original Array : ", arr);
console.log("getref Array : ", getRef);


//pass by value 

let getValue = [...arr];
getValue[6] = 7;

console.log("Original Array : ", arr);
console.log("getValue Array : ", getValue);