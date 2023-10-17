// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function last3digit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        if ((x % 10 == y % 10) && (y % 10 == z % 10) && (z % 10 == x % 10)) {
            return true;
        }

    }
    return false;

}

console.log(last3digit(345,543,-595));
console.log(last3digit(345,545,595));