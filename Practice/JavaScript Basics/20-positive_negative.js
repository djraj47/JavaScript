// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function check(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0))
        return true
    else
        return false
}
console.log(check(-2,2));
console.log(check(2,2));
console.log(check(3,-2));