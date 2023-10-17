// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  

function returnStr(str) {
    if (str.length >= 3) {
        str1 = str.substring(0, 3);
        return str1 + str + str1;
    }
    else
        return false
}
console.log(returnStr("Raj"));
console.log(returnStr("aj"));