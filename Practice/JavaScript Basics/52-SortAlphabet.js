// 52.  Write a JavaScript program to convert letters of a given string alphabetically.

function sortAlphabet(str) {
    return str.split('').sort().join('');
}
console.log(sortAlphabet("rajkiran"));