// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

function checkMultiple(num) {
    if (num % 3 == 0 || num % 7 == 0) {
        return `${num} is a factor of 3 & 7`;
    }
    else
        return `${num} is not a factor of 3 & 7`;
}
console.log(checkMultiple(44));
console.log(checkMultiple(21));