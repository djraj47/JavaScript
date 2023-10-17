// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  


function absoluteDiff(num) {
    let diff = 19 - num;
    if (diff > 19) {
        return diff * 3;
    }
    else
        return diff;
}
console.log(absoluteDiff(56));