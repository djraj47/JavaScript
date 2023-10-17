// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  


let s1 = 5
let s2 = 6
let s3 = 7

let s = (s1 + s2 + s3) / 2;
let area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(`Area is ${area} units`);