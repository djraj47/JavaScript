// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.  

function closest(num1, num2) {
    x = 100 - num1;
    y = 100 - num2;
    if (x < y) {
        return num1;
    }
    if (x > y) {
        return num2;
    }
    else {
        return false;
    }

}

console.log(closest(130, -9));
console.log(closest(-90,300));