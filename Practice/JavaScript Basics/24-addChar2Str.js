// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

function addChar(str) {

    return str.charAt(0) + str + str.charAt(0);

}
console.log(addChar("rajkiran"));