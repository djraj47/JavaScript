// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.



function return_str(str) {
    if (str.length <= 1)
        return str;

    mid_str = str.substring(1, str.length - 1);
    return str.charAt(str.length-1) + mid_str + str.charAt(0);
}

console.log(return_str("rajkiran"));