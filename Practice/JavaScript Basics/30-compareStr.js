// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

function compare_str(str) {
    if (str.substring(4, 10) == "Script") {
        newStr = str.substring(0, 4) + str.substring(11, str.length)
        return newStr;
    }
    else
        return str;
}
console.log(compare_str("rajkScridptkiran"));
console.log(compare_str("rajkScriptkiran"));