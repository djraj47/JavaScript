// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function checkInt(num1) {
    if ((num1 > 20 && num1 < 100) || num1 == 400) {
        return true
    }
    else false
}
console.log(checkInt(50));