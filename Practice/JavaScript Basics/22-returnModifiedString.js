// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function remove_char(str, pos) {
    let str1 = str.substring(0, pos);
    let str2 = str.substring(pos + 1, str.length);
    return str1 + str2;
}

console.log(remove_char("rajkiran", 4));
