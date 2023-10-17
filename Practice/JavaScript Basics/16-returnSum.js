// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function getSum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    else {
        return num1 + num2;
    }
}
console.log(getSum(10,10));
console.log(getSum(10,30));