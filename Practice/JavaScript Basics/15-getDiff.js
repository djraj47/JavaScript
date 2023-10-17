// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

function getDiff(num) {
    if (num <= 13)
        return 13 - num;
    else
        return (num - 13) * 2;
}
console.log(getDiff(13));
console.log(getDiff(66));